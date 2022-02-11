
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './Navbar.css'
const NavBar = ({ isLoaded }) => {
  const user = useSelector(state => state.session.user)
  let sessionLinks;
  if (user) {
    sessionLinks = (

          <>

            <NavLink to='/' exact={true} activeClassName='active'>
               Home
            </NavLink>
            <Link to='/users' exact={true}>
              Users
            </Link>
            <LogoutButton />

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
