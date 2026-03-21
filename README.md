# Jordan Daudu Portfolio

A modern personal portfolio website built to showcase my projects, skills, and experience as a software engineer.

## Overview

This website is my personal portfolio. It includes sections for:

- About me
- Skills
- Featured projects
- Experience
- Contact

The goal of the site is to present my work in a clean, modern, and professional way while keeping the project simple to run and easy to deploy.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS

## Features

- Responsive modern UI
- Smooth animations and transitions
- Project showcase section
- Resume/CV download support
- Contact form with EmailJS integration
- Light and dark theme support

## Running Locally

Clone the project and install dependencies:

```bash
npm install
npm run dev
```

Then open the local development URL shown in the terminal.

## Production Build

To build the project for production:

```bash
npm install
npm run build
npm run preview
```

## Deployment

This project can be deployed as a static site on platforms like Render.

### Render setup

- **Service type:** Static Site
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If you are using client-side routing, make sure your hosting setup rewrites all routes to:

```text
/index.html
```

## Contact Form Setup

The contact form uses EmailJS.

Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Make sure your EmailJS template includes the variables used by the form, such as:

```text
{{name}}
{{email}}
{{title}}
{{message}}
{{time}}
```

## Editing Portfolio Content

Most of the portfolio content is centralized in:

```text
src/data/portfolio.ts
```

Static assets such as images, icons, and files are stored in:

```text
public/
```

## Notes

This is a frontend portfolio project built to be simple, fast, and easy to maintain.

Built with the help of Replit.