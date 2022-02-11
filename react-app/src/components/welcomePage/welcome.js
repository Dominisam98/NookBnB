import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Weather from '../weather/weather';
import './welcome.css'
import BackgroundSlideshow from 'react-background-slideshow'


import image1 from './home1.jpg'
import image2 from './home2.jpg'
import image3 from './home3.jpg'
function MainPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>

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
