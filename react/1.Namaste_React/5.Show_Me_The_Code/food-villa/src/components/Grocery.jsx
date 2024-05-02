import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <div className="dummy-section">
        <div className="dummy-content">
          <h1>This is Grocery page</h1>
          <h2>Grocery will load when there is demand.</h2>
          <h2>User: {loggedInUser}</h2>
        </div>
      </div>
    </>
  );
};

export default Grocery;
