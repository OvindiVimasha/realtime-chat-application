"use client"

import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { useRouter } from "next/navigation"

const ANIMAL = ["Lion", "Tiger", "Bear", "Wolf", "Fox", "Eagle", "Shark", "Dolphin"]
const STORAGE_KEY = "chat_username"

const generateUsername = () => {
  const word = ANIMAL[Math.floor(Math.random() * ANIMAL.length)]
  return `anonymous-${word}-${nanoid(5)}`
}

export default function Home() {
  const [username, setUsername] = useState("")
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setUsername(stored)
    } else {
      const newName = generateUsername()
      localStorage.setItem(STORAGE_KEY, newName)
      setUsername(newName)
    }
  }, [])

  const createRoom = async () => {
    try {
      const response = await fetch("/api/room/create", {
        method: "POST",
      })
      const data = await response.json()
      console.log("Room created:", data.roomId)
      
      if (response.status==200){
        router.push(`/room/${data?.roomId}`)
      }
    } catch (error) {
      console.error("Failed to create room:", error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
             <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-pink-500">
               {"> "}private_chat
              </h1>
              <p className="text-zinc-500 text-sm">A private, self-destructing chat room.</p>
             </div>
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">
                Your Identity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                  {username}
                </div>
              </div>
            </div>

            <button
              onClick={createRoom}
              disabled={!username}
              className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 transition-colors mt-2 disabled:opacity-50"
            >
              CREATE SECURE ROOM
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}