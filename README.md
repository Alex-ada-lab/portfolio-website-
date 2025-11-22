# Alex's Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, modern UI design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile & desktop)
- ✨ Smooth animations (fade-in, slide-in)
- 🚀 Fast performance with Vite
- 💼 Professional sections: Hero, About, Skills, Projects, Contact

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Installation

1. Install Node.js (if not already installed):
   - Download from https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with photo and CTA
│   │   ├── About.tsx         # About me section
│   │   ├── Skills.tsx        # Skills grid
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Contact.tsx       # Contact form
│   │   └── ThemeToggle.tsx   # Dark/light mode toggle
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

- Update personal information in `src/components/Hero.tsx`
- Modify skills list in `src/components/Skills.tsx`
- Add/edit projects in `src/components/Projects.tsx`
- Change contact email in `src/components/Contact.tsx`
- Replace placeholder images with your own photos

## License

MIT
