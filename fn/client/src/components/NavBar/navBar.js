import React from 'react';

import './navBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    < div className='header d-flex'>
      < h3>
        < Link to='/'> Logo </Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='/women'> Women </Link>
        </li>
        <li>
          <Link to='/men'> Men </Link>
        </li>
        <li>
          <Link to='/children'> Children </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;