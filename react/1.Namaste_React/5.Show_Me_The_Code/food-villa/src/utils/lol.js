<>
  {/* NavBar */}
  <div className="navbar">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>

    <div className="nav-list">
      <p>
        <Link className="link" to="/">
          Home
        </Link>
      </p>
      <p>
        <Link className="link" to="/about">
          About
        </Link>
      </p>
      <p>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </p>
      <p>
        <Link className="link" to="/grocery">
          Grocery
        </Link>
      </p>
      <p>
        <Link className="link" to="/cart">
          <span className="cart-icon">
            <FaShoppingCart />
            <span className="badge">{cartItems.length}</span>
          </span>
        </Link>
      </p>
      <button className="login-btn" onClick={handleBtnClick}>
        {btnName}
      </button>
    </div>
  </div>
</>;
