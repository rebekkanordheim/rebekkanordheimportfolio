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
                        <p>To take the skills learned over the past three semesters and create an auction website.</p>
                        <h2>Brief</h2>
                        <p>An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.
                            <br></br>
                            <br></br>
                            When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.
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
