
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './Navbar.css'
import ProfileButton from './profilebutton';

const NavBar = ({ isLoaded }) => {
  const user = useSelector(state => state.session.user)
  let sessionLinks;
  if (user) {
    sessionLinks = (

          <>
            <nav>
              <ul>
                <li><NavLink to='/' exact={true} activeClassName='active' className='openpage'> Home </NavLink></li>
                <li><NavLink to='/homes' exact={true} className='openpage'> Find A Home </NavLink></li>
                <li><NavLink to='/homes/new' exact={true} className='openpage'> Add A Listing </NavLink></li>
                <li className='logout'><LogoutButton /></li>
              </ul>
            {/* <ProfileButton /> */}
            </nav>
          </>

    );
  } else {
    sessionLinks = (
      <>
          <nav>
            <ul>
             <li><NavLink to='/' exact={true} className='openpage'>Home</NavLink></li>
              <li><NavLink to='/login' className='openpage' exact={true}>Login</NavLink></li>
              <li><NavLink to='/sign-up' className='openpage' exact={true}>Sign Up</NavLink></li>
            </ul>

          </nav>
      </>
      );
}
return(
  <>

  <ul>

      {isLoaded && sessionLinks}

  </ul>
</>
)
}

export default NavBar;
