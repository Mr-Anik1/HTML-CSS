import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import "./css/App.css";
import { UserContext } from "./utils/UserContext";

// I want to split our app, Grocery will load when there is demand.
const Grocery = lazy(() => import("./components/Grocery"));

/**
 * @Final_AppLayout
 */
function AppLayout() {
  //---- DUMMY CODE FOR UNDERSTANDING CONTEXT API ---//
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Dummy API call
    const data = {
      name: "Anik",
    };

    setUserName(data.name);
  }, []);
  //---- DUMMY CODE FOR UNDERSTANDING CONTEXT API ---//

  return (
    // This way I have provided UserContext data all over my application and the setUserName can has to change userName instantly.
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </UserContext.Provider>
  );
}

/**
 * @outLet replaced with the children component
 *
 * when path is "/", <Outlet /> replaced with the <Body/> component
 *
 * when path is "/about", <Outlet /> replaced with the <About/> component
 *
 */

// App Router Configuration.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// Render the AppLayout
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
