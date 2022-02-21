import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Weather from '../weather/weather';
import './welcome.css'


function MainPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
            <h1 className='welcome'> NookBnB</h1>
            <div class="waviy">
                <span>N</span>
                <span>O</span>
                <span>O</span>
                <span>K</span>
                <span>B</span>
                <span>N</span>
                <span>B</span>
                <span>!</span>

             </div>
             </>
        );
    } else {
        sessionLinks = (
    <>
        <h1 className='test'>Welcome To NookBnB</h1>
        <Weather/>
    </>
        );
    }

    return (
        <div className='bg-container'>
            {isLoaded && sessionLinks}


        </div>
    );
}

export default MainPage;
