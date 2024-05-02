import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Contact = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <>
      <div className="dummy-section">
        <div className="dummy-content">
          <h1>This is our contact page</h1>
          <h2>User: {loggedInUser}</h2>
          <br />
          <label htmlFor="">Input User: </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
