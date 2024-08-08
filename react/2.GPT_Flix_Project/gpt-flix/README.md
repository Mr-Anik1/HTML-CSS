# Project Setup

- Create React Project

```
npm create vite@latest gpt-flix -- --template react
```

- Go to the project

```
cd gpt-flix
```

- Install project dependencies

```
npm install
```

- Install tailwindcss and its peer dependencies

```
npm install -D tailwindcss postcss autoprefixer
```

- Generate **_tailwind.config.js_** and **_postcss.config.js_** files

```
npx tailwindcss init -p
```

- Add the paths to the **_tailwind.config.js_** file

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the @tailwind directives for each of Tailwind’s layers to in the **_./src/index.css_** file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **Port Setup:** Inside **_vite.config.js_**, import defineConfig from vite and export a configuration object

```
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Replace 3000 with your desired port number
  },
});
```

- Install **_prettier-plugin-tailwindcss_** as a dev-dependency for automatic class sorting with prettier

```
npm install -D prettier prettier-plugin-tailwindcss
```

- Now create a **_.prettierrc_** file in the root project directory and add the below code to it.

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- Run the project

```
npm run dev
```

# Features

- Login/Signup
  - signIn/signUp form
  - redirect to the browser page
- Browser Page (after authentication)
  - Header
  - Main movie
    - Tailer in background
    - Title and description
    - Movie suggestions
      - Movie Lists \* N
- GPTFlix
  - Search Bar
  - Movie suggestions

# GPT Flix

- Create react app
- Configured Tailwind CSS
- Routing the application
- Header
- Login/SignIn Form
- SignUp Form
- Form Validation

01:57:30
