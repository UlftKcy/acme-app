import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const navbarLinks = [
    { id: 1, name: "Counter" },
    { id: 2, name: "Bitcoin" },
  ];
  return (
    <nav className="navbar">
      <a onClick={() => navigate("/")} className="brand-name">
        ACME
      </a>
      <div className="nav-menü">
        <ul className="navbar-nav">
          {navbarLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <a className="nav-link">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-hamburger">
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
