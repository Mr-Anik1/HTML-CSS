import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError(); //show error details

  return (
    <>
      <div className="dummy-section">
        <div className="dummy-content">
          <h1>Opps!!!</h1>
          <h2>Something went wrong</h2>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
