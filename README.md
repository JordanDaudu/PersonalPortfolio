# 🚀 Jordan Daudu — Portfolio

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Frontend](https://img.shields.io/badge/frontend-React%20%7C%20TypeScript-blue)
![Styling](https://img.shields.io/badge/styling-TailwindCSS-38B2AC)
![Animations](https://img.shields.io/badge/animations-Framer%20Motion-pink)
![Deployment](https://img.shields.io/badge/deployed-Render-purple)

🌐 **Live Demo:** https://jordan-daudu-portfolio.onrender.com/

---

## 🧭 Overview

This website serves as my personal portfolio, designed to present my work in a clean, modern, and professional way.

It includes:

* 👨‍💻 About me
* 🛠️ Technical skills
* 📦 Featured projects
* 📈 Journey / Experience
* 📬 Contact

The focus is on **clarity, scalability, and clean engineering**, while keeping the project simple to run and deploy.

---

## 🧠 Engineering Highlights

* Config-driven Journey / Experience system (easy category expansion)
* Centralized content architecture via `portfolio.ts`
* Component-based scalable UI using React + TypeScript
* Responsive-first layout across desktop, tablet, and mobile
* Structured animation system using Framer Motion
* Clean separation between data, UI, and presentation logic

---

## 🧱 Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Forms:** EmailJS

---

## ✨ Features

* 📱 Fully responsive design (desktop, tablet, mobile)
* 🎯 Clean, recruiter-friendly layout
* 🎬 Smooth animations and transitions
* 📂 Centralized content management (`portfolio.ts`)
* 📄 Resume / CV download support
* 📬 Contact form with EmailJS integration
* 🌗 Light & dark theme support
* 🧠 Config-driven Journey / Experience section with grouped categories and animated filtering

---

## 🏗️ Project Structure

```text
src/
  data/
    portfolio.ts      # Central content source
  components/
    Experience.tsx    # Journey / Experience section
    Skills.tsx
    Projects.tsx
  lib/
    skill-icons.ts
```

Static assets:

```text
public/
```

---

## ▶️ Running Locally

```bash
npm install
npm run dev
```

Then open the local development URL shown in the terminal.

---

## 📦 Production Build

```bash
npm install
npm run build
npm run preview
```

---

## 🌍 Deployment

This project can be deployed as a **static site**.

### Example: Render

* **Service type:** Static Site
* **Build command:** `npm run build`
* **Publish directory:** `dist`

If using client-side routing, make sure all routes rewrite to:

```text
/index.html
```

---

## 📬 Contact Form Setup

Uses **EmailJS**.

Create a `.env` file:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Template variables example:

```text
{{name}}
{{email}}
{{title}}
{{message}}
{{time}}
```

---

## ✏️ Editing Portfolio Content

All portfolio content is centralized in:

```text
src/data/portfolio.ts
```

To update:

* Projects
* Experience
* Skills
* Personal info

Simply edit this file.

---

## 🧠 Notes

* Built with a focus on **clean architecture and scalability**
* Designed to grow alongside ongoing projects and experience
* Structured for easy future expansion (new sections, categories, content types)

---

## ⚡ Built With

Built with the help of Replit.
