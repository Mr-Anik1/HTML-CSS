# React + Vite Setup:

```
npm create vite@latest project-name

select react

select javascript+swc

cd project-name

npm install

npm run dev
```

## Port Setup

Inside vite.config.js, import defineConfig from vite and export a configuration object:

```
import { defineConfig } from 'vite';

export default defineConfig({
   server: {
      port: 3000, // Replace 3000 with your desired port number
   },
});
```

## React Fragement

We know that JSX code should be used inside only one parent, all JSX code should be used inside "div"(parent)

If I don't want to use "div" then I can use <React.fragment> component, It comes form react library.
<React.fragme> behaves like an empty tag. But <React.fragment> looks like ugly, so developer use
<></> tag insted <React.fragment>. So, basically behind the sense <></> has <React.fragment>.

```
<React.fragment>
  ...Code
</React.fragment>
```

Simpler version of <React.fragment>

```
<>
...JSX CODE
</>
```

#### What is Config Driven UI?

- What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

- Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

- Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

### Why should set a key in a react component?

We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this

#### Not Recomanded

```
{resList.map((restaurant, index) => (
   <RestaurantCard key={index} resData={restaurant} />
))}
```

Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

### Why we need virtual DOM?

We need virtual DOM for reconcliation(algorithm) React.

#### What is React fiber?

Reconcliation Engine(DIFF)
