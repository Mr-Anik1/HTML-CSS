import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../utils/constant";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful and go to home page
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gradient-to-b from-black px-4 py-2">
        {/* Right Side */}
        <img className="w-44" src={logo} alt="logo" />

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
