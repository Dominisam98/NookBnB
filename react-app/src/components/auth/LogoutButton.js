import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LogoutButton = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  if (user) {
    <Redirect to='/' />;
  }

  return <button className='logout' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
