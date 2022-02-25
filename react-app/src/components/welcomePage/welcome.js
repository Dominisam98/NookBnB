import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Weather from '../weather/weather';
import './welcome.css'
import { NavLink, Link } from 'react-router-dom';


function MainPage({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <div className='bg'>

                <h1 className='test'>NookBnB
                </h1>

                <div class="seven">
                    <h1>Get Started</h1>

                </div>
                <div className='six'><h2 className='padd'>Ready to get started as a host? Click Below!</h2></div>
                <div className='fix'><Link to="/homes/new" className='buttin'>LIST MY HOME</Link></div>
                <div className='fix'><Link to="/homes" className='buttin'>View all homes</Link></div>


                <div className='fix'><div className='paragraph'><p className='paragraph'>NookBnB is an inspired clone of AirBnB, the lodging site with a twist of animal crossing styling.
                This is still being worked on.<br/>My contacts are just one scroll away.I plan on adding a booking feature in the near feature. I also would like to broaden<br/>the
                the horizon of what you can list on the website, such as boats, cars and more! This was a very fun site to work on and I'm anxious to do even more with this site.
                </p>
                </div></div>



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
