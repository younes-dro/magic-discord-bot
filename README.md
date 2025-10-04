## Magic Discord Bot

Magic Discord Bot is a Next.js application that allows users to connect their Discord bot and create custom bot commands. Users can define commands that their bot will respond to directly in Discord.

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env` and `.env.local` files with the following values:

```bash
# .env
DATABASE_URL="your_database_connection_string_here"

# .env.local
NODE_ENV="development"
```

> ⚠️ The user will provide their own Discord bot token during setup, so no token should be included in environment variables.

Create a `NEXTAUTH_SECRET`:

```bash
$ openssl rand -base64 32
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

---

## Features

* Connect a Discord bot using a token.
* Create and manage custom bot commands.
* Admin dashboard for managing bots, commands, and user interactions.

---

## Tech Stack

* Next.js (App Router)
* Prisma ORM with MongoDB
* NextAuth.js for authentication
* Vercel deployment ready

---

## Contributing

Feel free to fork this project and create pull requests for improvements.
