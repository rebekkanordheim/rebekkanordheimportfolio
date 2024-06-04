import React from 'react';
import { Helmet } from 'react-helmet';
/* import { Link } from 'react-router-dom'; */
import '../../App.css';
import MockupeCom1 from '../../images/MockupeCom1.png';
import MockupeCom2 from '../../images/MockupeCom2.png';
import MockupeCom3 from '../../images/iPhoneMockupHolidaze.png';
import EcomSite from '../../images/EcomSite.png';

const eCom = () => {
    return (
        <div className="specificprojects-container">
            <Helmet>
                <title>Rebekka Nordheim | eCom Store</title>
            </Helmet>
            <div className="specificcard">
                <div className="specificcard-content" id='Holidaze'>
                    <h1>JavaScript Frameworks CA  - <i>eCom Store</i></h1>
                    <div className='projectimages-container'>
                        <img className='specificproject-mockup' src={MockupeCom1} alt="eCom Project" />
                        <img className='specificproject-mockup' src={MockupeCom2} alt="eCom Project" />
                        <img className='specificproject-mockup' src={MockupeCom3} alt="eCom Project" />

                    </div>
                    <div className='projectinfo'>
                        <h2>Goal</h2>
                        <p>To apply knowledge of React to build an eCom store.</p>
                        <h2>Brief</h2>
                        <p>Using a Noroff API for this project.
                            <br></br>
                            <br></br>
                            You are tasked with build out the following pages for an eCom store:
                            <li>Homepage</li>
                            <li>Individual product page</li>
                            <li>Cart page</li>
                            <li>Checkout success page</li>
                        </p>
                        <div>
                        </div>
                    </div>
                    <div className='projectimages-container'>
                        <img className='specificproject-site' src={EcomSite} alt="eCom Site" />
                    </div>
                    <div>
                        <a href="https://github.com/rebekkanordheim/ecomstore"
                            target="_blank"
                            rel="noreferrer">GitHub</a>
                        <a href="https://ecom-rebekkanordheim.netlify.app"
                            target="_blank"
                            rel="noreferrer">Netlify</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default eCom;
