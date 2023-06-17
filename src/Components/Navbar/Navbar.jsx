import React from 'react';
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
    {
      label: 'Contact',
      path: '/contact'
    }
  ]
}

const Nav = () => {
  return (
    <div>
      <nav class="main-nav">
        {
          mainNavigation.menu.map(item => {
            return (
              <a href={item.path}>{item.label}</a>
            )
          })
        }
      </nav>
  </div>
  )
}

export default Nav;
