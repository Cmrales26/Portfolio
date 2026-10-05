# Portfolio

Personal portfolio of Nelson Morales — Systems Engineer / Full Stack Developer.

🔗 Live site: [nelson-portfolio-seven.vercel.app](https://nelson-portfolio-seven.vercel.app/)

## Features

- Bilingual (Spanish/English), auto-detected from the browser with a manual switcher
- Light / dark / system theme, persisted in `localStorage`
- Sections: profile, professional experience, projects, research & publications, skills, contact form
- Resume viewer and contact form backed by a separate API ([`portfolio-backend`](https://github.com/Cmrales26)), configured via `VITE_SERVER_URL`

## Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [MUI](https://mui.com/) for form and layout components
- [react-i18next](https://react.i18next.com/) for internationalization
- [react-hook-form](https://react-hook-form.com/) + [react-hot-toast](https://react-hot-toast.com/) for the contact form
- Plain CSS (`App.css`), no CSS framework

## Getting Started

### Prerequisites

- Node.js 18+
- The companion backend running (or a deployed instance) for the resume/contact endpoints

### Installation

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```
VITE_SERVER_URL=http://localhost:5000/api
```

Points to the backend that serves `/MyResume` and `/sendemail`. Falls back to `http://localhost:5000/api` if unset.

### Available scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR        |
| `npm run build`     | Type-check-free production build to `dist/` |
| `npm run preview`   | Preview the production build locally      |
| `npm run lint`      | Run ESLint                                |

## Project Structure

```
src/
├── assets/          # Icons, images, and static data (projects, experience, research)
├── components/       # Page sections (Header, About, Projects, Skills, Contact, ...)
├── context/          # React context providers (icons, contact/email)
├── config/           # i18next configuration
└── Animations/        # Scroll-triggered animation helpers

public/locales/        # i18next translation files (en/es)
```

## License

Personal project — not licensed for reuse.
