# 🕵️‍♂️ Private Chat – Next.js Real-Time App

A secure and ephemeral chat application built with **Next.js 16**, **Elysia**, and **Upstash Redis**. Designed with privacy and simplicity in mind, featuring anonymous identities and self-destructing rooms that disappear after 10 minutes.

**Tech Stack:** Next.js | TypeScript | Tailwind CSS | Upstash

---

## ✨ Features

- **Privacy First:** No sign-ups or personal data collection.
- **Anonymous Identities:** Users are automatically assigned unique, fun anonymous IDs (e.g., `anonymous-Wolf-k92lx`).
- **Ephemeral Rooms:** Chat rooms self-destruct after 10 minutes, leaving no message history.
- **Real-Time Messaging:** Powered by **Upstash Redis** for fast communication.
- **Type-Safe API:** End-to-end type safety between frontend and backend using **Elysia** and **Eden**.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Backend API:** Elysia (via Next.js API Routes)
- **Database & Realtime:** Upstash Redis
- **State Management:** TanStack Query

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- Node.js 18+
- Upstash account with Redis

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder>

### 2. Install Dependencies
npm install
# or
yarn install
# or
pnpm install

### 3. Configure Environment Variables
UPSTASH_REDIS_REST_URL="your-upstash-redis-rest-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-redis-rest-token"

### 4. Run the Development Server
npm run dev

