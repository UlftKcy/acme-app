import React from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../utils/hooks/useToggle";
import Sidebar from "../Sidebar/Sidebar";
import { navbarLinks } from "../../constants/index";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const [state, toggle] = useToggle(false);

  return (
    <>
      {!state ?
        (<nav className="navbar">
          <a onClick={() => navigate("/")} className="brand-name">
            ACME
          </a>
          <div className="nav-menü">
            <ul className="navbar-nav">
              {React.Children.toArray(navbarLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a onClick={() => navigate(link.path)} className="nav-link">{link.name}</a>
                </li>
              )))}
            </ul>
          </div>
          <button onClick={toggle} className="btn-hamburger">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        ) : (
          <Sidebar />
        )}
    </>
  );
};

export default Navbar;
