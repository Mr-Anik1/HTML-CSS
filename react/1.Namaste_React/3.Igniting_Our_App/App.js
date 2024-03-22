/**
 * @Tutorial_Number 3
 * Please check the tutorial 2 code and project structure.
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h2>Hello Anik, Good Morning!</h2>;

// react component
const TestComp = () => (
  <>
    <h1>React World</h1>
    <p>I want to be a React developer.</p>
  </>
);

/**
 * @React_Component
 * Name of component start with capital letter.
 * If our code goes multiple lines, then we have to wrap these codes in parenthesis. ()
 * We can use the react element inside a react component using curly brackets. {heading}
 *
 * We can use the react component inside another react component using the tag <TestComp/>.
 * or call the functional component this way {TestComp()}
 * It's called component composition.[ A component inside another component ]
 *
 * Any piece of JavaScript code we can write inside the curly brackets{}
 *
 *
 */
const HeaderComponent = () => {
  return (
    <div>
      <TestComp />
      {heading}
      <h3>Welcome to the React world.</h3>
    </div>
  );
};

// Same code, direct return
const HeaderComponent2 = () => (
  <div>
    <h1>Hello Anik</h1>
    <h2>welcome to you the React world.</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// When I render the react element
// root.render(heading);

// When I render the react component
root.render(<HeaderComponent />);
