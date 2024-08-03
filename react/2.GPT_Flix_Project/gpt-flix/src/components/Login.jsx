import { Form } from "react-router-dom";
import { Header } from "./Header";

const Login = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/89a29202-8f93-4dd9-b75b-71ba2b0a7620/BD-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-image"
          />
        </div>
        <Form>
          <input
            type="text"
            placeholder="Email address"
            className="m-2 p-2"
            name="email"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="m-2 p-2"
            name="password"
            id="password"
          />
          <button className="m-4 rounded-md bg-purple-800 px-4 py-2">
            Sign In
          </button>
        </Form>
      </div>
    </>
  );
};

export { Login };
