import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Browse } from "./Browse";
import { ErrorPage } from "./ErrorPage";
import { Login } from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export { Body };
