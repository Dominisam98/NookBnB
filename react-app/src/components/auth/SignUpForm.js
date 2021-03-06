import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { login, signUp } from '../../store/session';
import isEmail from "validator/lib/isEmail";
import './login.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    if (username.length < 5){
      setErrors(['Username must be longer than 5 characters'])
    } else if (password.length < 4){
      setErrors(['password must be longer than 4 characters'])
    }  else if (!isEmail(email)) {
      setErrors(["Please enter a valid Email address."])

    }
      else if (email.length < 2){
      setErrors(['Enter a valid email!'])

    }else if (password !== repeatPassword) {
      setErrors(["Passwords don't match!"]);
    }

    else if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <h1 className='heading'>Don't Have An Account? Sign Up Here!</h1>
    <form onSubmit={onSignUp} className='login-form'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label className='login-input'> User Name </label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label className='login-input'>Email </label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label className='login-input'>Password </label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label className='login-input'>Repeat Password </label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='fill' type='submit'>Sign Up</button>
    </form>
    </>
  );
};

export default SignUpForm;
