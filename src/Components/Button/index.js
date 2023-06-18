import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Button = ({ children, to, ...props }) => {
  return (
    <Link
      as="button"
      className="primary-button"
      to={to}
      { ...props }
    >
      { children }
    </Link>
  )
}

export default Button
