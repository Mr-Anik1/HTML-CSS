import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <>
      <div>Browse Component</div>
      <Link
        to={"/"}
        className="text-sky-600 underline decoration-yellow-500 decoration-wavy underline-offset-4"
      >
        Login Page
      </Link>
    </>
  );
};

export { Browse };
