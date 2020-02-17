import React from 'react';

import './navBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    < div className='header d-flex'>
      <nav>
        <div className="nav-wrapper">
          < Link to='/' className='brand-logo center'> Logo </Link>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
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
      </nav>
    </div>

  );
};

export default NavBar;