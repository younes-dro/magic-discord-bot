## Magic Discord Bot

Magic Discord Bot is a Next.js application that allows users to connect their Discord bot (via token) and create custom bot commands. These commands can be mapped to memberships or WooCommerce products on a website. For example, a user can buy a membership directly by typing a custom command in Discord.

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
DATABASE_URL="mongodb+srv://ets_bot:rR8EjGm4MJWEzNA@cluster0.b5paofh.mongodb.net/test"

# .env.local
NODE_ENV="development"
```

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

- Connect a Discord bot using a token.
- Create and manage custom bot commands.
- Map commands to WooCommerce memberships or products.
- Members can trigger commands to purchase memberships or interact with the website directly via Discord.
- Admin dashboard for managing bots, commands, and user interactions.

---

## Tech Stack

- Next.js (App Router)
- Prisma ORM with MongoDB
- NextAuth.js for authentication
- Vercel deployment ready

---

## Contributing

Feel free to fork this project and create pull requests for improvements.
