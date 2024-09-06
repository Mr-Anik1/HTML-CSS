import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { BG_IMAGE, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate email, password and name
    const message = checkValidData({
      password: password.current?.value,
      email: email.current?.value,
      name: name.current?.value,
    });
    setErrorMessage(message);
    // If error message is exist then return and don't go ahed.
    if (message) return;

    // Otherwise go ahed to SignIn/SignUp
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Update the redux store with updated user information
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          console.log(error);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          console.log(error);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Content Section */}
        <div className="relative flex-1">
          {/* Header Section */}
          <Header />

          {/* Background Image Section */}
          <div className="absolute">
            <img
              className="h-screen w-screen object-cover"
              src={BG_IMAGE}
              alt="bg-image"
            />
          </div>

          {/* Sign-In/Sign-Up Form Section */}
          <div className="absolute left-0 right-0 mx-auto mt-[35%] flex w-[60%] rounded-lg bg-black bg-opacity-80 sm:w-[50%] md:mt-32 md:w-[40%] lg:w-1/4">
            <Form onSubmit={(e) => e.preventDefault()} className="p-8">
              <h1 className="mb-4 text-3xl font-bold text-white">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>

              {/* Name field for Sign Up */}
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name"
                  className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200 focus:border-[1px] focus:border-green-500 focus:outline-none focus:ring-0"
                  id="fullName"
                />
              )}

              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200 focus:border-[1px] focus:border-green-500 focus:outline-none focus:ring-0"
                id="email"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200 focus:border-[1px] focus:border-green-500 focus:outline-none focus:ring-0"
                id="password"
              />

              {/* Show Error Message */}
              <p className="pt-1 font-bold text-red-600">{errorMessage}</p>

              <button
                className="my-6 w-full rounded bg-red-600 py-1 text-white transition hover:bg-purple-700"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>

              <div className="inline text-white">
                <span>
                  {isSignInForm
                    ? "New to GptFlix?"
                    : "Do you have already an account?"}{" "}
                </span>
                <span
                  className="cursor-pointer text-blue-500 hover:underline hover:underline-offset-4"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up Now" : "Sign In Now"}
                </span>
              </div>
            </Form>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export { Login };
