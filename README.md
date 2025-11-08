# SOORAJ T S – Developer Portfolio

A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. It highlights the skills, projects, and experience of SOORAJ T S—Software Developer at Efeedor, Bangalore—while offering dark/light theming, smooth interactions, and a contact form.

## ✨ Features

- Responsive SPA powered by Vite + React + TypeScript.
- Tailwind CSS utility styling with custom theming and reusable components.
- Hero, About, Skills, Projects, Experience, and Contact sections.
- Dark/light mode toggle with preference persisted in `localStorage`.
- Accessible, animated UI elements with focus states and keyboard-friendly navigation.
- SEO-ready: descriptive metadata, Open Graph/Twitter tags, JSON-LD schema.
- Ready for GitHub Pages deployment.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the site in development mode.

## 📁 Project Structure

```
src/
├─ components/
│  ├─ common/        # Shared layout primitives
│  ├─ layout/        # Header, footer, theme toggle
│  └─ sections/      # Content sections (Hero, About, etc.)
├─ context/          # Theme provider
├─ data/             # Content configuration
├─ hooks/            # Custom hooks
└─ main.tsx          # App entry point
```

Content such as hero text, highlights, skills, and projects are defined in `src/data/content.ts` for easy updates.

## 🧩 Customisation

- **Profile photo**: Replace the placeholder by adding an image at `public/images/sooraj-ts.jpg`. Update the path in `aboutContent.image` if required.
- **Resume download**: Run `npm run generate:resume` to create a placeholder PDF, or replace `public/resume.pdf` with your own file and adjust `heroContent.resumeLink` if the name changes.
- **Project cards**: Update the `projects` array with real links and, optionally, image paths.
- **Social links**: Adjust `contactContent.social` for your own URLs.

## 🌗 Theming

The application uses class-based dark mode (`darkMode: 'class'` in `tailwind.config.js`). The `ThemeProvider` handles:

- Loading the preferred theme from `localStorage`
- Falling back to the OS preference
- Updating the `<html>` class to `dark` or `light`
- Allowing runtime toggle with the header button

## 🧪 Scripts

- `npm run dev` – Start Vite dev server.
- `npm run build` – Type-check and create a production build.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint checks.
- `npm run generate:resume` – Generate a sample resume PDF (uses PDFKit, safe to replace with your own).

## 📦 Deploying to GitHub Pages

1. Update `package.json` with the correct repository information (e.g. `"homepage": "https://<username>.github.io/<repo>"` if using static hosting).
2. build the project: `npm run build`.
3. Deploy the `dist` folder. For GitHub Pages, the simplest approach is:

   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```

   Alternatively, configure a GitHub Actions workflow to publish on push to `main`. See [Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages) for details.

## 📄 License

This project is provided as-is for personal portfolio use. Feel free to adapt it for your own profile.

---

Built with ❤️ by SOORAJ T S. For collaboration opportunities, reach out at [sooraj114ts@gmail.com](mailto:sooraj114ts@gmail.com).
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
