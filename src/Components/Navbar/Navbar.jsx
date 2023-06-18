import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const mainNavigation = {
  menu: [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Products',
      path: '/products'
    },
    {
      label: 'Diary',
      path: '/diary'
    },
  ]
}

const Nav = () => {
  return (
    <div>
      <nav class="main-nav">
        {
          mainNavigation.menu.map(item => {
            return (
              <Link to={item.path}>{item.label}</Link>
            )
          })
        }
      </nav>
  </div>
  )
}

export default Nav;
