import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/Login/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Weather from './components/weather/weather';
import './App.css'
import CreateHomeForm from './components/CreateHomeForm/NewHome';
import MainPage from './components/welcomePage/welcome';
import ViewHomes from './components/ViewAllHomes/viewhomes';
import EditHomeForm from './components/EditHomeForm/edithomeform';
import SingleHome from './components/ASingleHome/singleHome';






function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setIsLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }






  return (
    <BrowserRouter>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact={true}>
            <MainPage isLoaded={isLoaded} />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
            <Weather />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path="/homes/new" exact={true}>
            <CreateHomeForm />
          </Route>
          <ProtectedRoute path="/homes/" exact={true}>
          <ViewHomes />
        </ProtectedRoute>
        <Route path="/homes/:id/edit" exact={true}>
          <EditHomeForm />
        </Route>
        <Route path="/homes/:id" exact={true}>
          <SingleHome />
        </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
          </ProtectedRoute>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
