import React from 'react';
import { Helmet } from 'react-helmet';
/* import { Link } from 'react-router-dom'; */
import '../../App.css';
import MockupBidwave1 from '../../images/MockupBidwave1.png';
import MockupBidwave2 from '../../images/MockupBidwave2.png';
import MockupBidwave3 from '../../images/iPhoneMockupBidWave.png';
import BidWaveSite from '../../images/BidWaveSite.png';

const BidWaveProject = () => {
    return (
        <div className="specificprojects-container">
            <Helmet>
                <title>Rebekka Nordheim | BidWave</title>
            </Helmet>
            <div className="specific-card">
                <div className="specific-card-content">
                    <h1>Semester Project 2  - <i>BidWave</i></h1>
                    <div className='projectimages-container'>
                        <img className='specificproject-mockup' src={MockupBidwave1} alt="BidWave Project" />
                        <img className='specificproject-mockup' src={MockupBidwave2} alt="BidWave Project" />
                        <img className='specificproject-mockup' src={MockupBidwave3} alt="BidWave Project" />

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
                    </div>
                    <div>
                        <h2>See them in live here</h2>
                        <div className='project-link'>
                            <a className="button" href="https://github.com/rebekkanordheim/semesterproject2" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="button" href="https://bidwave.netlify.app" target="_blank" rel="noreferrer">Netlify</a>
                        </div>
                    </div>
                    <div className='projectimages-container'>
                        <img className='specificproject-site' src={BidWaveSite} alt="Bidwave Site" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidWaveProject;
