import React from "react";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <p>Nafis Tahmid &copy; {currentDate}</p>
    </footer>
  );
};

export default Footer;
