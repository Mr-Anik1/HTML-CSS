import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Browse } from "./Browse";
import { ErrorPage } from "./ErrorPage";
import { Login } from "./Login";
import { MovieDetails } from "./MovieDetails";

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
    {
      path: "/movies/:movieId",
      element: <MovieDetails />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
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
