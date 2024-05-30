/* import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../App.css';
import Holidaze from '../../images/Holidaze.png';
import eCom from '../../images/eCom.png';
import BidWave from '../../images/BidWave.png';

const Projects = () => {
    return (
        <div className="projects-container">
            <Helmet>
                <title>Rebekka Nordheim | Projects</title>
            </Helmet>
            <h1>Projects Page</h1>
            <div className="card">
                <img src={Holidaze} alt="Holidaze" />
                <h2>Holidaze</h2>
                <Link to="/holidaze">
                    <button>View Project</button>
                </Link>
            </div>
            <div className="card">
                <img src={eCom}  alt="eCom" />
                <h2>eCom</h2>
                <Link to="/ecom">
                    <button>View Project</button>
                </Link>
            </div>
            <div className="card">
                <img src={BidWave}  alt="Bidwave" />
                <h2>Bidwave</h2>
                <Link to="/bidwave">
                    <button>View Project</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../../App.css';
import Holidaze from '../../images/Holidaze1.png';
import eCom from '../../images/eCom1.png';
import BidWave from '../../images/BidWave1.png';
import '../../App.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <Helmet>
                <title>Rebekka Nordheim | Projects</title>
            </Helmet>
            <h1>Projects Page</h1>
            <div className="card">
                <Link to="/holidaze">
                    <img src={Holidaze} alt="Holidaze" />
                    <div className="card-content">
                        <h2>Holidaze</h2>
                        <Link to="/holidaze">
                            <button>View Project</button>
                        </Link>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ecom">
                    <img src={eCom} alt="eCom" />
                    <div className="card-content">
                        <h2>eCom</h2>
                        <Link to="/ecom">
                            <button>View Project</button>
                        </Link>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/bidwave">
                    <img src={BidWave} alt="Bidwave" />
                    <div className="card-content">
                        <h2>Bidwave</h2>
                        <Link to="/bidwave">
                            <button>View Project</button>
                        </Link>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
