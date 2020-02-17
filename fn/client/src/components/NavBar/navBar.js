import React, {useState} from 'react';

import './navBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [ isShown, setIsShown] = useState(false);
  return (
    < div className='header d-flex'>
      <nav>
        <div className="nav-wrapper">
          < Link to='/' className='brand-logo center'> Logo </Link>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to='/women' onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
              > Women </Link>
            </li>
            <li>
              <Link to='/men' className='change'> Men </Link>
            </li>
            <li>
              <Link to='/children' className='change'> Children </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </div>

  );
};

export default NavBar;