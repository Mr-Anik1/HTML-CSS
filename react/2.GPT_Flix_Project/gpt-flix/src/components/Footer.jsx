const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="z-10 bg-black py-5 text-center text-white transition hover:cursor-pointer hover:text-sky-500 hover:duration-300">
        <p>
          &copy; {currentYear} <span className="text-teal-500">GptFlix</span>.
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export { Footer };
