# Next.js Application with Sanity Studio

This is a modern web application built with [Next.js](https://nextjs.org) (App Router), [React](https://react.dev), and [Sanity CMS](https://www.sanity.io). It incorporates fluid animations, a beautiful UI, and an integrated headless CMS.

## Key Features

- **Next.js App Router**: Modern, fast, and SEO-friendly React framework.
- **Sanity CMS**: Fully integrated headless CMS at `/studio` for managing content easily.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid and responsive UI development.
- **Shadcn UI & Framer Motion**: Beautiful, accessible, and animated UI components.
- **Music Player**: Audio playback integrated using `wavesurfer.js`.
- **Strict TypeScript**: Ensures type safety and improves code quality.

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, clsx, tailwind-merge
- **Components**: Shadcn UI, Embla Carousel, Lucide React
- **Animations**: Framer Motion
- **CMS**: Sanity & Next-Sanity
- **Package Manager**: pnpm

## Prerequisites

Make sure you have the following installed on your local machine:
- **Node.js** (v20 or higher recommended)
- **pnpm** (v10.x or higher)

## Getting Started

Follow these instructions to set up the project locally.

### 1. Install Dependencies

Clone the repository and install the required dependencies using `pnpm`:

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in the root of the project and add the necessary environment variables for Sanity. Example:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run the Development Server

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application auto-updates as you edit the files.

### 4. Access Sanity Studio

You can access the embedded Sanity Studio to manage content by navigating to:
[http://localhost:3000/studio](http://localhost:3000/studio)

## Scripts

- `pnpm run dev` - Starts the development server.
- `pnpm run build` - Builds the application for production.
- `pnpm run start` - Starts the production server.
- `pnpm run lint` - Runs ESLint to check for code issues.

## Project Structure

- `/src/app` - Next.js App Router pages and layouts.
- `/src/components` - Reusable React components (UI, layout, sections).
- `/src/sanity` - Sanity configuration, schema types, and setup.
- `/src/lib` - Utility functions and libraries.
- `/src/types` - Global TypeScript types and interfaces.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
