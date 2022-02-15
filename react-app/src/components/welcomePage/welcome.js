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
                <h1>Welcome</h1>

            </>
        );
    } else {
        sessionLinks = (
            <>
                    <Weather />

            </>
        );
    }

    return (
        <div id='main'>
            {isLoaded && sessionLinks}


        </div>
    );
}

export default MainPage;
