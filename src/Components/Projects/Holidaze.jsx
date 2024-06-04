import React from 'react';
import { Helmet } from 'react-helmet';
/* import { Link } from 'react-router-dom'; */
import '../../App.css';
import HolidazeMockup1 from '../../images/MockupHolidaze1.png';
import HolidazeMockup2 from '../../images/MockupHolidaze2.png';
import HolidazeMockup3 from '../../images/iPhoneMockupHolidaze.png';
import HolidazeSite from '../../images/HolidazeSite.png';

const HolidazeProject = () => {
    return (
        <div className="specificprojects-container">
            <Helmet>
                <title>Rebekka Nordheim | Holidaze</title>
            </Helmet>
            <div className="specificcard">
                <div className="specificcard-content" id='Holidaze'>
                    <h1>Project Exam 2 - <i>Holidaze</i></h1>
                    <div className='projectimages-container'>
                        <img className='specificproject-mockup' src={HolidazeMockup1} alt="Holidaze Project" />
                        <img className='specificproject-mockup' src={HolidazeMockup2} alt="Holidaze Project" />
                        <img className='specificproject-mockup' src={HolidazeMockup3} alt="Holidaze Project" />

                    </div>
                    <div className='projectinfo'>
                        <h2>Goal</h2>
                        <p>To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.</p>
                        <h2>Brief</h2>
                        <p>A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.
                            <br></br>
                            <br></br>
                            There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.</p>
                        <div>
                        </div>
                    </div>
                    <div className='projectimages-container'>
                        <img className='specificproject-site' src={HolidazeSite} alt="Holidaze Site" />
                    </div>
                    <div>
                        <a href="https://github.com/rebekkanordheim/rnprojectexam2holidaze"
                        target="_blank"
                        rel="noreferrer">GitHub</a>
                        <a href="https://rnprojectexam2holidaze.netlify.app"
                        target="_blank"
                        rel="noreferrer">Netlify</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidazeProject;
