# Discuss – A Full-Stack Community Discussion Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?logo=nextauth&logoColor=white)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
*(Add a screenshot of your application here)*
`![Discuss Platform Screenshot](link-to-your-screenshot.png)`

---

## ✨ Features

-   📝 **Create & Join Discussions**: Users can start new discussion topics.
-   💬 **Threaded Comments**: Nested replies allow for organized and engaging conversations.
-   🔐 **Secure Authentication**: Robust login system using **NextAuth.js** with a GitHub OAuth provider.
-   🗄️ **PostgreSQL Database**: Scalable and robust data persistence managed with the Prisma ORM.
-   🌙 **Dark Mode**: A fully responsive and user-friendly light/dark theme switcher.
-   🎨 **Modern UI**: Clean and responsive interface built with Tailwind CSS.
-   🛠️ **Full-Stack Architecture**: Leverages Next.js for both frontend rendering and backend API routes.

---

## 🧰 Tech Stack

| Layer      | Technology                               |
| :--------- | :--------------------------------------- |
| **Framework** | Next.js / React                          |
| **Styling** | Tailwind CSS                             |
| **Database** | PostgreSQL with Prisma ORM               |
| **Authentication** | NextAuth.js + GitHub OAuth               |
| **Deployment** | Vercel / Railway / Render                |

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A running [PostgreSQL](https://www.postgresql.org/) database instance.

### Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/discuss.git](https://github.com/your-username/discuss.git)
    cd discuss
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # OR
    yarn install
    ```

### Production (Vercel) database & Prisma schema

Set these in Vercel Project → Settings → Environment Variables:

- `DATABASE_URL` = Postgres connection string
- `PRISMA_SCHEMA_PATH` = prisma/schema.postgres.prisma

Build runs `prisma migrate deploy && next build`, so your production DB schema is applied automatically.


3.  **Set up your Environment Variables**
    Create a `.env` file in the root of your project by copying the example:
    ```bash
    cp .env.example .env
    ```
    Update the `.env` file with your credentials:
    ```env
    # Database connection string for Prisma
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # NextAuth.js variables
    # Generate a secret with: openssl rand -base64 32
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
    NEXTAUTH_URL="http://localhost:3000"

    # GitHub OAuth credentials
    # Create an app here: [https://github.com/settings/developers](https://github.com/settings/developers)
    GITHUB_CLIENT_ID="YOUR_GITHUB_CLIENT_ID"
    GITHUB_CLIENT_SECRET="YOUR_GITHUB_CLIENT_SECRET"
    ```

4.  **Run Database Migrations**
    This command will sync your database schema with your Prisma schema file.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/discuss/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
