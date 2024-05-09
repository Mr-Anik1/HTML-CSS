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

<!-- Class 6 -->

### Exploring the world class 6

1.Page loads -> API call(500ms) -> Render
2.Page loads -> Render -> API call(500ms) -> Render
react follows 2nd approch for better user experice.
useEffect() has been called after the component rendered.

when setBtnNameReact() is called, it is updating the btnNameReact value and it is render the header component once again.Now this btnNameReact is new variable than it was before. It will find the deef between older version and the newer version and it will see only button has updated.

** Important **
e.target.value when I press a key, it updates the local state variable searchText. And must be remembared, when local state variable is update that time our component is re-rendared. That means when I press every single key on the search box, every time our component is rendered.

--> Whenever you changed the local state variable react re-rendred the component.
->> Whenever state variable update, react reconciliation cycle(re-renders the component)

#### Why react is too fast?

- React fiber is new reconciliation algorithm, which find different between two virtual dom and update only the portion is required.

## Episod 7

dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. [If dependencies are:](https://dmitripavlutin.com/react-useeffect-explanation/ "useEffect Explanation")

**A) Not provided: the side-effect runs after every rendering.**

```
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}
```

**B) An empty array []: the side-effect runs once after the initial rendering.**

```
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```

**C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes.**

```
import { useEffect, useState } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
```

Never use "a" tag in React, so I have to update the Header Componet. Insted use of "a" we can use "Link".
Link component help us navigate one page to another page without refresh.

There are two types of routing in our web application.

- Client side routing
- Server side routing

React is single page, here its have one page and only component is interchange via client side routing.

## Episod 8

Whenever a class component is instantiated (loaded), at first the constructor is called, then render is called.

- First constructor is called,
- Render method is called,
- componentDidMount() is called.

componentDidMount() is used to make an API call. It's like the useEffect() hook.

```
load -> render(dummy data) -> API call [ componentDidMount() ] -> render(new API data)
```

React has two phase:

- Render phase
- Commit Phase:
  - React update the DOM and refs
  - componentDidMount()

### React component lifecycle:

------------ MOUNTING ------------

- Render phase:

  - Constructor(Dummy Data)
  - Render(Dummy Data)

- Commit Phase:
  - React update the DOM with dummy data
  - ComponentDidMount() is called
  - API call

------------ UPDATING -------------

- Render phase:

  - this.setState() -> update the state variable with API data
  - Render(API Data)

- Commit Phase:
  - React update the DOM with new API data
  - componentDidUpdate()

### Where we use componentWillUnmount()?

In componentDidMount(), if we use a setIntervel() function and set a 1s timer, then every 1 second, setIntervel() will call. If we navigate from one page to another (component), the setInterval() will not stop. If we go to the page again where we used setInterval(), at that moment, two setInterval() will run without our permission, and this is a big problem in the Singel Page Application. In a single-page application, we don't refresh the page; we are only changing the component.

To avoid this problem, we will need to set clearInterval(). And where do we set the celarInterval()? Yes, we set clearInterval() in the componentWillUnmount(). Because when we navigate from one page to another (component), the componentWillUnmount() will call. So, when componentWillUnmount() will call that time, our clearInterval() will also call and clear the interval. And this way, clearInterval() will work perfectly.

**_setInterval in the componentDidMount()_**

```
componentDidMount(){
  this.timer = setInterval(()=>{
    console.log("Timer is set");
  },1000)
}
```

**_When we nevigate the page clear the interval_**

```
componentWillUnmount(){
  clearInterval(this.timer);
}
```

### In the functional component, we can use setInterval() and clearInterval() in an easy way.

```
useEffect(()=>{
  //setInterval() has been stored in the timer variable, and it is run every 1 second.
  const timer = setInterval(()=>{
    console.log("Timer is set");
  },1000)


  //clear the interval (timer) when we leave the page.(unMounting phage)
  return ()=>{
    clearInterval(timer)
  }
},[])
```

After we leave the page, the return() function will be called, and it will clear the interval.

## Episod 9 Optimize Our App

chunking |
code spliting | ------> Lazy Loading
dynamic bundling | ------> On Demand Loading

I can use lazy loading when my application will big, this way I can split my app in many JavaScript file. My app will be lightweight and fast for using lazy loading.

```
import {lazy, Suspense} from "react";

// lazy takes a callback function and its have a import() function which takes Grocery path.

const Grocery = lazy(()=>import("../components/Grocery"))
```

Suspense is a component which give us react. It's solves lazy loading synchronus problem. when we split a component we have to wrap this component with the "Suspense" component. like this <Suspense><Grocery/><Suspense/> and "Suspense" must have a fallback={}, when component is not exist or is not loading yet, then fallback is shown our UI.

Here we split <Grocery/> component, so that we wrap up this with <Suspense> component.

```
const appRouter=createBrowserRouter([
{
path:"/eza"
element:<Example/>
children:[
// other children path
    {
      path:"/grocery",
      element:(<Suspense fallback={<Shimmer/>}><Grocery/><Suspense/>) // wrap with <Suspense/> component.
    }
  ]
errorElement:<Error/>
}
])
```

# Must Be Remember, you should use named export insted of default export in React components.

```
Could not Fast Refresh ("default" export is incompatible). Learn more at https://github.com/vitejs/vite-plugin-react-swc#consistent-components-exports
```

# Episod-11 Here we learn Higher Order Component.

A React application has two layers:

- UI Layer
- Data Layer

UI layer is powered by Data layer.

```
const [singleShow, setSingleShow] = useState(true);

  const handleClick = () => {
    showItems === false ? setSingleShow(true) : setSingleShow(!singleShow);
    setShowIndex();
  };
```

# Episod-12

The Redux store is a big object, and it is kept in a global central place.

|| WRITE DATA ||

When I click on the add button, it dispatches an action, and then it calls the function() [ reducer ]. This function modifies the slice of the Redux store.

click add button --> dispatch Action --> calls reducer() function --> reducer() function modifies the slice of the Redux store.

|| READ DATA ||

We will use a selector to read the data from our Redux store, and the selector will modify our React component.

|Redux store| --> SELECTOR read data from Redux store -> SELECTOR modify our react component

SELECTOR is also known as subscribing to the store. When we use selector (subscribe a slice of store), it syncs to the target react component. That means when Redux store data changes,  the component will get the updated data instantly

# You don't need to subscribe to the whole store; you only subscribe to the target slice of the store.

### Wrong Code, Here, I have subscribed to the whole store. It is a very big problem. Because there are lots of slices in the store. When another slice of the store [ not mine ] has changed, this code will run because here we have subscribed to the whole store, not the target slice of the store.

```
const store=useSelector((store)=>store);
const cartItems=store.cart.items;
```

### Right Code, Here, I have subscribed to only the target slice of the store, which is cart items. So when the cart items are changed, it will update my component. Otherwise not.

```
const cartItems=useSelector((store)=>store.cart.items)
``` 

#Episod-13 Testing
