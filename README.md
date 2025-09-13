
## Getting Started

First, install the dependinces

```bash
npm install

```

Second, create `.env` and `.env.local` files with : 
```bash
# .env
DATABASE_URL="mongodb+srv://ets_bot:rR8EjGm4MJWEzNA@cluster0.b5paofh.mongodb.net/test"
# .env.local
NODE_ENV="developement"
```
Create NEXTAUTH_SECRET :
```bash
$ openssl rand -base64 32

```



Third, run the development server:
```bash
npm run dev

```

