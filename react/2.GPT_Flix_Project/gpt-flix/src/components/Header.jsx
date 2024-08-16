import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  /**
   * @User_information_to_the_redux_store
   *
   * When a user is Signed Up or Signed In add the user information to the redux store and when a user is Signed Out remove the user information form the redux store.
   *
   * Here we use onAuthStateChanged, firebase provided it. onAuthStateChanged is a Firebase Authentication method used to detect changes in the authentication state(Sign Up, Sign In, Sign Out) of a user in real-time.
   *
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed Up or Signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );

        // When user is Signed Up or Signed In navigate to the browse page
        navigate("/browse");
      } else {
        // User is Signed Out
        dispatch(removeUser());

        // When user is Signed Out navigate to the login page
        navigate("/");
      }
    });

    // Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-gradient-to-b from-black px-4 py-2">
        {/* Right Side */}
        <img className="w-44" src={LOGO} alt="logo" />

        {/* Left Side */}
        {user && (
          <div className="flex items-center space-x-4">
            <img
              src={user?.photoURL}
              alt="usericon"
              className="h-8 w-8 rounded-full"
            />
            <button
              onClick={handleSignOut}
              className="hover: rounded-md bg-red-600 px-2 py-1 font-semibold text-white transition hover:bg-fuchsia-700"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { Header };
