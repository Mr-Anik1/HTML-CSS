import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <div className="dummy-section">
        <div className="dummy-content">
          <h1>This is About page</h1>
          <h1>User: {loggedInUser}</h1>
        </div>
      </div>
    </>
  );
};

export default About;
