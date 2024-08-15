import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { Browse } from "./Browse";
import { ErrorPage } from "./ErrorPage";
import { Login } from "./Login";

const Body = () => {
  // dispatch must be put on top of the component
  const dispatch = useDispatch();

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
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  /**
   * @User_information_to_the_redux_store
   *
   * When a user is signed In add the user information to the redux store and when a user is signed out remove the user information form the redux store.
   *
   * Here we use onAuthStateChanged, firebase provided it. onAuthStateChanged is a Firebase Authentication method used to detect changes in the authentication state of a user in real-time.
   *
   */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export { Body };
