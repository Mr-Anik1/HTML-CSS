import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      {/* NavBar */}
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="logo" srcset="" />
          </a>
        </div>
        <div className="nav-list">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Cart</a>
        </div>
      </div>
    </>
  );
};

export default Header;
