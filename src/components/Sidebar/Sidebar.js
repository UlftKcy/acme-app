import React from 'react';
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../utils/hooks/useToggle";
import Navbar from '../navbar/Navbar';
import "./Sidebar.css";

const Sidebar = () => {
  let navigate = useNavigate();
  const [state, toggle] = useToggle(false);

  return (
    <>
      {!state ?
        (
          <div className="sidebar-wrapper">
            <button onClick={toggle} className='close-sidebar'><i className="fas fa-times fa-2x"></i></button>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a onClick={() => navigate("/")}>Counter</a>
              </li>
              <li className="sidebar-item">
                <a onClick={() => navigate("/bitcoin-price")}>Bitcoin</a>
              </li>
            </ul>
          </div>
        ) : (
          <Navbar />
        )}

    </>
  );
}

export default Sidebar;