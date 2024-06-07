import React from 'react';
import { Helmet } from 'react-helmet';
import '../../App.css';
import MockupeCom1 from '../../images/MockupeCom1.png';
import MockupeCom2 from '../../images/MockupeCom2.png';
import MockupeCom3 from '../../images/iPhoneMockupeCom.png';
import EcomSite from '../../images/EcomSite.png';

const EcomProject = () => {
    return (
        <>
            <Helmet>
                <title>Rebekka Nordheim | eCom Store</title>
            </Helmet>
            <div className="specificprojects-container">
                <div className="specific-card">
                    <div className="specific-card-content">
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
                                <br /><br />
                                You are tasked with building out the following pages for an eCom store:
                                <ul>
                                    <li className='project-list'>Homepage</li>
                                    <li className='project-list'>Individual product page</li>
                                    <li className='project-list'>Cart page</li>
                                    <li className='project-list'>Checkout success page</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <h2>See them live here</h2>
                            <div className='project-link'>
                                <a className="button" href="https://github.com/rebekkanordheim/ecomstore" target="_blank" rel="noreferrer">GitHub</a>
                                <a className="button" href="https://ecom-rebekkanordheim.netlify.app" target="_blank" rel="noreferrer">Netlify</a>
                            </div>
                        </div>
                        <div className='projectimages-container'>
                            <img className='specificproject-site' src={EcomSite} alt="eCom Site" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EcomProject;
