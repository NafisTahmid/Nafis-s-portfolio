import React from "react";

const Header = () => {
  return (
    <div className="navbar">
      <a href="/">
        &#60;Nafis<span>Tahmid</span> /&#62;
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#expertise">Expertise</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
