
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './Navbar.css'
import ProfileButton from './ProfileButton';
import { useDispatch} from "react-redux";
import * as homeStore from './../store/home'

const NavBar = ({ isLoaded }) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const homeReducer = useSelector((state) => state.homeReducer);
  let homes = homeReducer?.allHomes
  const [homeState, setHomeState] = useState(homes);

  if(!homes){
    dispatch(homeStore.thunk_getAllHomes());
  }

  useEffect(() => {
    dispatch(homeStore.thunk_getAllHomes());
  }, [dispatch]);







  let sessionLinks;
  if (user) {
    sessionLinks = (

          <>
            <nav>
              <ul>
                <li><NavLink to='/' exact={true} activeClassName='active' className='openpage'> Home </NavLink></li>
                <li><NavLink to='/homes' exact={true} className='openpage' onClick={() => setHomeState(homeReducer?.allHomes)}> Find A Home </NavLink></li>
                <li><NavLink to='/homes/new' exact={true} className='openpage'> Add A Listing </NavLink></li>
                <li className='logout'><LogoutButton /></li>
                {/* <li><ProfileButton user={user} /></li> */}
              </ul>

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
