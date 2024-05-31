import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../App.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <Helmet>
                <title>Rebekka Nordheim | Projects</title>
            </Helmet>
            <h1>My latest projects</h1>
            <div className="card">
                <div className="card-content" id='Holidaze'>
                    <h2>Project Exam 2 - <i>Holidaze</i></h2>
                    <Link to="/holidaze">
                        <button>View Project</button>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-content" id='eCom'>
                    <h2>JavaScript Frameworks - <i>eComstore</i> </h2>
                    <Link to="/ecom">
                        <button>View Project</button>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-content" id='Bidwave'>
                    <h2>Semester Project 2 - <i>Bidwave</i></h2>
                    <Link to="/bidwave">
                        <button>View Project</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
