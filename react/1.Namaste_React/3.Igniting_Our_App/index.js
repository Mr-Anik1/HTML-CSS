/**
 * @Tutorial_Number 2
 *
 * we should use .parcel-caehe in .gitignore
 * we should use dist in .gitigonore
 * Parcel is :=> HMR - Hot Module Replacement.
 *
 *
 * Parcel has dependencies, those dependencies have other dependencise that called:
 *  -Transitive Dependencies
 *     - Dependencies Tree
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "This is Heading 1"
);

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

// createElement(type,props,...children)
// heading1 and heading2 are the children of the div container.
const divContainer = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);
