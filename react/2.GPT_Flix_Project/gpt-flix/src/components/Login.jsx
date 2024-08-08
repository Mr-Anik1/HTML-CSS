import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { Header } from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/89a29202-8f93-4dd9-b75b-71ba2b0a7620/BD-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-image"
          />
        </div>

        <div className="absolute left-0 right-0 mx-auto mt-24 flex w-1/4 rounded-lg bg-black bg-opacity-80">
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
                className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200"
                id="fullName"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200"
              id="email"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded bg-gray-800 px-2 py-1 text-slate-200"
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
    </>
  );
};

export { Login };
