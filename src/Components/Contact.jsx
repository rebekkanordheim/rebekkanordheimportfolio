import React from 'react';
import { Helmet } from 'react-helmet';
import Portrait from '../images/rebekkanordheim.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Rebekka Nordheim | Contact</title>
            </Helmet>
            <h1>Get in touch</h1>
            <div className='card'>
                <h2>Hello there!</h2>
                <p>My name is Rebekka Nordheim and I am a 25 y/o Front-End Developer. I'm based in Lørenskog and have currently finished my Higher Professional Degree in Front-End Development at Noroff School of Technology and Digital Media.
                    <br></br>
                    <br></br>
                    During my studies at Noroff, I've gained a comprehensive understanding of various web design principles, including UI and UX design, WCAG compliance, and responsive design techniques. Through hands-on learning, I've honed my skills in HTML, CSS, JavaScript, and React, enabling me to create dynamic and user-centric web applications.
                    <br></br>
                    <br></br>
                    From crafting visually appealing interfaces to ensuring accessibility and responsiveness across devices, my education at Noroff has equipped me with the knowledge and tools to excel in the ever-evolving field of front-end development.
                    <br></br>
                    <br></br>
                    You can connect with me on LinkedIn to learn more about my journey and explore my latest projects on GitHub and Netlify.
                </p>
                <div className='contact'>
                    <a href="https://github.com/rebekkanordheim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon-black" />
                    </a>
                    <a href="https://www.linkedin.com/in/rebekka-nordheim-903377194/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon-black" />
                    </a>
                </div>
                <img className='portrait' src={Portrait} alt='rebekka nordheim portrait'></img>
                
            </div>
        </div>
    );
};

export default Contact;
