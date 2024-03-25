### Remove console with this package:

- babel-plugin-transform-remove-console

---

JSX is HTML like syntex, but it is not HTML inside JavaScript.

```
React.createElement => Object => HTML(DOM)
```

React.createElement gives an object, and the object gets converted to HTML, which is rendered to the DOM.

```
JSX => React.createElement => Object => HTML(DOM)
```

JSX uses React.createElement and React.createElement gives an object, and the object gets converted to HTML, which is rendered to the DOM.

JSX is not React; behind the sense, Babel is converting JSX to React.createElement.



### Babel:
- Babel is a transpiler which creats polyfills(old version of code).
- Babel takes new version of code and transpile it to older version of code.



## When I set up a React project using Parcel or Vite, does they automatic installed Babel as a dependency in the Node Modules?
  
                      
### PARCEL:
When you use Parcel to set up a React project, Babel gets installed automatically as a dependency in your Node modules. Here's why:
        - Parcel's Approach: Parcel relies on Babel for transpiling modern JavaScript features into code compatible with older browsers. Unlike Vite's native ESM approach, Parcel utilizes Babel for broader browser support.
                      
                      
### VITE: 
No, Babel doesn't automatically install in the Node modules when you set up a React project using Vite. Vite takes a different approach compared to traditional bundlers like Webpack. Here's the key difference:
                      
     - Vite's Default Approach: Vite focuses on utilizing native ES modules support in modern browsers. It pre-bundles dependencies and rewrites imports for browser compatibility, eliminating the need for Babel in most scenarios.
                      


