import React from "react";
import Navbar from "../Navbar/Navbar";
import UserIcon from "../Icons/User";
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
  return (
    <header className="header container-header">
      <div className="header-top">
        <div className="container header-top-icon">
            <img src={logo} alt="logo" />
          <div className="wrapper-user-icon">
            <Link to="/diary">
              <UserIcon className="user-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div><Navbar /></div>
      </div>
    </header>
  )
}

export default Header;
