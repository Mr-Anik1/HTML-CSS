import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is important, but in the localhost it renders react component two times that is annoying.So for now I have removed it. For the production time it is very useful.
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
