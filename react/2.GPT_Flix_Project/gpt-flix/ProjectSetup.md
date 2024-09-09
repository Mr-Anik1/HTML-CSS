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

# Firebase setup

- Register app
- Add Firebase SDK

```
npm install firebase
```

- Create firebase.jsx file in the utils directory and add below lines in it

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 <!-- From .env file -->
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

- Install Firebase CLI

```
npm install -g firebase-tools
```

- Go to the app console and click authentication after authentication you have to enable Email/Password option.

- Deploy to Firebase Hosting (Later)

  - First Step

  ```
  firebase login
  ```

  - Second Step

  ```
  firebase init
  ```

  - After Firebase init:

    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Use an existing project
    - gptflix-a47a4 (GptFlix)
    - What do you want to use as your public directory? (public) ==> dist
    - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) ==> N
    - Set up automatic builds and deploys with GitHub? (y/N) ==> N

    - It will create firebase.json and .firebaserc file.

  - Third Step (When you're ready, deploy your web app)

  ```
  firebase deploy
  ```

### It must be remembered that before you deploy your project, you have to build your project with this command: npm run build.

- Hosting URL: https://gptflix-a47a4.web.app

# Redux Setup

- Install redux toolkit as a devDependencies

```
npm i -D @reduxjs/toolkit
```

- Install redux as a dependencies

```
npm i react-redux
```

# vite env setup

You have to use the name of the API key in the .env file VITE_GEMINI_AI_KEY instead of REACT_APP_GEMINI_AI_KEY.

```
VITE_GEMINI_AI_KEY = "key...."
```

Now you can access GEMINI_AI_KEY this way.

```
import.meta.env.VITE_GEMINI_AI_KEY,
```

## Project Structure

- Login/Signup

  - SignIn/SignUp form
  - Redirect to the browser page

- Browser Page (after authentication)

  - Header
  - Main Container
    - Video Background
    - Video Title
  - Secondary Container
    - Movie List \* n
      - Cards \* n

- GptFlix Movie Search
  - Search Bar
  - Movie suggestions

## GptFlix built steps

- Create react app
- Configured Tailwind CSS
- Routing the application
- Header
- Login/SignIn Form
- SignUp Form
- Form Validation
- Firebase Setup
- Deploying our app to production
- Created Sign Up user account and navigate to the browse page
- Implemented Sign In user API and navigate to the browse page
- Created Redux Store with userSlice
- Implemented Sign Out and navigate to the home page
- Update user profile
- Bug Fix: Sign Up user displayName and profile picture update
- Bug Fix: If user is not logged in redirect to /browse to login page(/) and vise-versa
- Unsubscribe to the onAuthStateChanged callback
- Register TMDB API & create an app & get access token
- Create movieSlice
- Create useAllCategoryMovies custom hook for get data from the TMDB
- Update store with movie data
- Create MainContainer and SecondaryContainer
- Create trailerVideo state in the movieSlice
- Create useMovieTrailer custom hook for get data for trailer video
- Update the store with the trailer video data
- Add the trailer video in the VideoBackground component with trailer video data.
- Create MovieList and MovieCard Component
- Access Movies data from the store and pass the movie lists component
- Add popular movie list
- Create Footer Component for the login page
- Add Favicon in the index.html page
- GPT Search Bar
- GPT Search Page
- Multi-language feature in our app
- Create movie suggestion option by using the GeminiAI API and the TMDB API
- Create Movie Details page
