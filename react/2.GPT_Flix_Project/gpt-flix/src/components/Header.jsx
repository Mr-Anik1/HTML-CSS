import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/languageConstant";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute z-10 flex w-screen flex-col items-center justify-between bg-gradient-to-b from-black px-4 py-2 md:flex-row">
        {/* Right Side */}
        <img className="w-44" src={LOGO} alt="logo" />

        {/* Left Side only show when user is logged-in*/}
        {user && (
          <div className="flex items-center space-x-4 pt-4 text-sm md:pt-0 md:text-lg">
            {/* User language preference only show when showGptSearch is true */}
            {showGptSearch && (
              <select
                className="rounded-md bg-gray-800 px-2 py-1 text-white shadow-md hover:shadow-blue-500"
                id="lang"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearchClick}
              className="rounded-md bg-sky-500 px-2 py-1 font-semibold shadow-md transition duration-200 hover:bg-gradient-to-r hover:from-pink-700 hover:to-teal-500 hover:text-white hover:shadow-slate-400"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img
              src={user?.photoURL}
              alt="usericon"
              className="h-8 w-8 rounded-full md:h-9 md:w-9"
            />
            <button
              onClick={handleSignOut}
              className="rounded-md bg-red-600 px-2 py-1 font-semibold text-white shadow-md transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-sky-500 hover:shadow-teal-300"
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
