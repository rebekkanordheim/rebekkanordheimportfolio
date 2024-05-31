import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../App.css';
import HolidazeImage from '../../images/MockupHolidaze.png';

const HolidazeProject = () => {
    return (
        <div className="specificprojects-container">
            <Helmet>
                <title>Rebekka Nordheim | Holidaze</title>
            </Helmet>
            <div className="specificcard">
                <div className="specificcard-content" id='Holidaze'>
                    <h1>Project Exam 2 - <i>Holidaze</i></h1>
                    <img className='specificprojectimage' src={HolidazeImage} alt="Holidaze Project" />
                    <div className='projectinfo'>
                        <h2>Goal</h2>
                        <p>To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.</p>
                        <h2>Brief</h2>
                        <p>A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.
                            <br></br>
                            <br></br>
                            There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.</p>
                    </div>
                    <div>
                        <a href="https://github.com/your-holidaze-github-link">GitHub</a>
                        <a href="https://www.netlify.com/your-holidaze-netlify-link">Netlify</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidazeProject;
