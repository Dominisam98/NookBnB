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
        <div className='bg'>
             <div class="six">
                <h1>NookBnB
                <span>An AirBnB Clone</span>
                </h1>
                </div>
                <div class="seven">
                    <h1>About Site</h1>
                </div>
            <div className='paragraph'><p>NookBnB is an inspired clone of AirBnB, the lodging site with a twist of animal crossing styling.
                This is still being worked on.<br/>My contacts are just one scroll away.</p></div>

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
             <div class="deconstructed">
                    WELCOME
                    <div>WELCOME</div>
                    <div>WELCOME</div>
                    <div>WELCOME</div>
                    <div>WELCOME</div>
                </div>
                <footer className='homeFooter'>
                    <div className='homeAboutContainer'>
                        <a
                            className='homeAboutLink'
                            href='https://www.linkedin.com/in/dominique-samuels-b33233197/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={'https://i.ibb.co/ZmrdqsC/linkedin.png'}
                                className='homeAboutImg'
                            />
                        </a>
                        <a
                            className='homeAboutLink'
                            href='https://github.com/dominisam98'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={'https://i.ibb.co/b2ZmRL8/github.png'}
                                className='homeAboutImg'
                            />
                        </a>
                    </div>
                </footer>
        </div>
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
