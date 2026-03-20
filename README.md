# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment

To deploy this website:

1. Build the project: `npm run build`
2. The built files will be in the `dist` folder.
3. Upload the contents of the `dist` folder to your hosting provider.

### Recommended Hosting Options

- **Vercel**: Drag and drop the `dist` folder at [vercel.com](https://vercel.com).
- **Netlify**: Drag and drop the `dist` folder at [netlify.com](https://netlify.com).
- **GitHub Pages**: Push your code to a GitHub repository, then enable Pages in the repository settings to serve from the `dist` folder.
- **Firebase Hosting**: Use Firebase CLI to deploy: `firebase deploy`.

For local preview before deploying: `npm run preview`
