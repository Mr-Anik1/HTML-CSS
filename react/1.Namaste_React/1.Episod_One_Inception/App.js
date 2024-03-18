// || Simple JavaScript DOM Manipulation ||
//   const heading = document.createElement("h1");
//   heading.innerHTML = "Hello, Anik!";
//   const root = document.querySelector("#root");
//   root.appendChild(heading);

// || React ||
const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

// createElement(type,props,...children)
// heading1 and heading2 are the children of the div container.
const divContainer = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);
