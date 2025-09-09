# Local Development & Production Guide

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A comprehensive guide for moving from local development setups to production-ready systems. This documentation serves as a one-stop resource for developers, bringing together rare, hard-to-find practices that are usually only learned after years of trial and error.

## 🌟 Features

- **Docker Containerization** - Guides for setting up Docker with Next.js and other services
- **Database Setup** - MongoDB, Redis, MySQL, PostgreSQL, RabbitMQ, and more
- **Node.js Scripts** - Installation and configuration scripts
- **Math Utilities** - Mathematical tools and resources
- **Deployment Workflows** - From local development to production

## 📋 Project Structure

```
src/
├── app/
│   ├── docker/           # Docker configuration guides
│   │   ├── database/     # Database container setups
│   │   └── nextjs/       # Next.js containerization
│   ├── math/             # Math utilities
│   └── scripts/          # Utility scripts
│       ├── docker/       # Docker-related scripts
│       └── node/         # Node.js scripts
```

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Development

This project uses:

- [Next.js](https://nextjs.org/) - React framework
- [Nextra](https://nextra.site/) - Documentation framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [KaTeX](https://katex.org/) - Math typesetting

You can start editing the page by modifying `src/app/page.mdx`. The page auto-updates as you edit the file.

## 🐳 Docker Support

This project includes comprehensive Docker guides for:

- Setting up Next.js in Docker
- Database containers (MongoDB, Redis, MySQL, PostgreSQL)
- Multi-stage builds for production

Check the `/docker` directory for detailed guides and examples.

## 📜 Scripts

Useful scripts are provided in the `/scripts` directory:

- Node.js installation scripts
- Docker utility scripts

## ☁️ Deployment

### Cloudflare Pages

This project supports deployment to Cloudflare Pages:

```bash
npm run deploy
# or preview with
npm run preview
```

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site)
- [Docker Documentation](https://docs.docker.com/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
