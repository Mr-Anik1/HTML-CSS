### Install tailwindcss

Install tailwindcss and its peer dependencies via npm.

```
npm install -D tailwindcss postcss autoprefixer vite
```

### Create a tailwind.config.js file with this command.

```
npx tailwindcss init
```

After installing tailwindcss and postcss, you must now create a postcss.config.js file and input the below code into it.

### postcss.config.js

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Add the below code to the tailwind.config.js

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add the Tailwind directives to your main CSS file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## If you want to automatic class sorting with prettier:

Install **_prettier-plugin-tailwindcss_** as a dev-dependency:

```
npm install -D prettier prettier-plugin-tailwindcss
```

#### Now create a .prettierrc file in the root project directory and add the below code to it.

.prettierrc

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
