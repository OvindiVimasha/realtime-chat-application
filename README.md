# Real-Time Chat Application

A secure and privacy-focused real-time chat application built with modern web technologies. Users can create ephemeral chat rooms with automatically generated anonymous identities, and rooms self-destruct after 10 minutes with no message history retention.

---

## Features

- **Privacy First:** No user registration or personal data collection required
- **Anonymous Identities:** Unique auto-generated anonymous IDs for each user
- **Ephemeral Rooms:** Chat rooms automatically expire after 10 minutes with complete data deletion
- **Real-Time Messaging:** WebSocket-powered real-time communication via Upstash Redis
- **Type-Safe Development:** End-to-end TypeScript with full type safety across the stack
- **Modern UI:** Responsive design with Tailwind CSS v4
- **Production Ready:** Optimized performance and scalable architecture

---

## Tech Stack

| Category                | Technology                      |
| ----------------------- | ------------------------------- |
| **Framework**           | Next.js 16 (App Router)         |
| **Language**            | TypeScript 5                    |
| **Frontend**            | React 19                        |
| **Styling**             | Tailwind CSS v4                 |
| **Backend API**         | Elysia 1.4+                     |
| **API Client**          | Elysia Eden                     |
| **Database & Realtime** | Upstash Redis                   |
| **State Management**    | TanStack Query (React Query) v5 |
| **ID Generation**       | nanoid                          |
| **Linting**             | ESLint 9                        |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm package manager
- Upstash Redis account ([Create free account](https://upstash.com))

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd realtime-chat-application
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

   Or with pnpm:

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the project root:

   ```env
   UPSTASH_REDIS_REST_URL=your-upstash-redis-rest-url
   UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-rest-token
   ```

   Get these credentials from your [Upstash Console](https://console.upstash.com):

   - Go to your Redis database
   - Copy the REST URL and REST Token

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

---

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build for production                     |
| `npm start`     | Start production server                  |
| `npm run lint`  | Run ESLint to check code quality         |

---

## How It Works

1. **User Access:** User visits the application and is assigned a unique anonymous ID
2. **Room Creation:** User creates or joins a chat room using a room ID
3. **Real-Time Communication:** Messages are transmitted in real-time via Upstash Redis
4. **Automatic Expiration:** Room and all associated data automatically expire after 10 minutes
5. **Privacy Guarantee:** No messages are stored permanently; all data is ephemeral

---

## Environment Variables

| Variable                   | Description                            | Example                 |
| -------------------------- | -------------------------------------- | ----------------------- |
| `UPSTASH_REDIS_REST_URL`   | Upstash Redis REST API endpoint        | `https://...upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Authentication token for Upstash Redis | `Bearer ...`            |

---

## API Documentation

The application uses Elysia for the backend API. Key endpoints are defined in the API routes under `src/app/api/`.

For client-side communication, the application uses Elysia Eden for type-safe API calls.

---

## Development

### Code Quality

- **TypeScript:** Full type safety across the entire stack
- **ESLint:** Code linting with Next.js and TypeScript support
- **Tailwind CSS:** Utility-first CSS for consistent styling

### Best Practices

- Server-side Redis operations for data persistence and real-time updates
- Client-side React Query for state management and caching
- Type-safe API communication between frontend and backend

---

## Deployment

### Production Build

```bash
npm run build
npm start
```

### Hosting Options

- **Vercel:** Recommended for Next.js applications ([Deploy Guide](https://vercel.com/docs/frameworks/nextjs))
- **Docker:** Create a container for deployment
- **Other Platforms:** Any Node.js-compatible hosting platform

### Production Checklist

- [ ] Set environment variables in hosting platform
- [ ] Configure Upstash Redis for production
- [ ] Enable HTTPS
- [ ] Set up monitoring and logging
- [ ] Configure rate limiting for API endpoints

---

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

## License

This project is open source and available under the MIT License.

---

## Support & Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs
- **Elysia Documentation:** https://elysiajs.com
- **Upstash Documentation:** https://upstash.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## Troubleshooting

### Connection Issues to Upstash Redis

- Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are correct
- Check network connectivity to Upstash servers
- Ensure the Upstash Redis database is active

### Development Server Not Starting

- Clear `.next` directory: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (must be 18+)

### TypeScript Errors

- Run `npm run lint` to check for type errors
- Ensure all dependencies are properly installed

---

**Last Updated:** December 2025
