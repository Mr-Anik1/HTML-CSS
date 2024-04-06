const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <p>&copy; {currentYear} Anik. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
