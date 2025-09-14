📝 Mystery Journal

A modern and responsive blog platform built with Next.js 15, Prisma, Clerk authentication, and Tailwind CSS. Users can create, read, like, and manage articles with a smooth UI and optimized performance.

🚀 Features

🔐 Authentication & User Management with Clerk

🖋️ Rich-text Editor using React Quill for article creation

🗄️ Database ORM with Prisma

☁️ Image Upload powered by Cloudinary

🎨 Modern UI Components with Radix UI + TailwindCSS

🌙 Light/Dark Mode support using next-themes

❤️ Likes & Optimistic Updates for better UX

📱 Fully Responsive design

🛠️ Tech Stack

Frontend & Framework

Next.js 15

React 19

TailwindCSS 4

Backend & Database

Prisma

[PostgreSQL / MySQL / SQLite] (choose your DB)

Authentication & File Storage

Clerk

Cloudinary

UI & Utilities

Radix UI

Lucide Icons

Zod (validation)

clsx & tailwind-merge (class handling)

⚙️ Installation

Clone the repository

git hub link: https://github.com/yasin-hasan2

project link:
cd blog-website

Install dependencies

npm install

# or

yarn install

Set up environment variables
Create a .env file in the root with:

DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
CLOUDINARY_URL=your_cloudinary_url

Run Prisma migrations

npx prisma migrate dev

Start the development server

npm run dev

📂 Project Structure
src/
├── app/ # Next.js App Router
│ ├── articles/ # Articles pages
│ ├── api/ # API routes
│ └── layout.tsx
├── components/ # Reusable UI components
├── actions/ # Server actions
├── lib/ # Utilities (db, auth, etc.)
└── styles/ # Global styles

🧑‍💻 Scripts

npm run dev – Start development server

npm run build – Build production app

npm run start – Run production server

npx prisma studio – Open Prisma Studio

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change..
