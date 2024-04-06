import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.css";

// Final AppLayout
function AppLayout() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

// Render the AppLayout
ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
