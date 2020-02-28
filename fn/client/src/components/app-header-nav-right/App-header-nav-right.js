import React from 'react';
import { Link } from 'react-router-dom';

import './App-header-nav-right.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';
import Currency from '../currency';

const AppHeaderNavRight = () => (
  <div className='nav-wrap'>
    <nav className="nav-bar">
        <ul>
            <li key="4" className= 'nav-right'>
                <Link to="/wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
            </li>
            <li key="5" className= 'nav-right'>
                <Link>
                    <Currency />
                </Link>
            </li>
            <li key="6" className= 'nav-right'>
                <Link to="/register" >
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </li>
        </ul>
    </nav>
  </div>
);

export default AppHeaderNavRight;
