import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rebekka Nordheim | Home</title>
            </Helmet>
            <h1>Welcome to my Portfolio</h1>
            <p className='card'>I'm a dedicated front-end developer student passionate about crafting immersive and user-friendly web experiences. On this portfolio website, you'll find a showcase of my recent projects, where I've applied my skills in HTML, CSS, JavaScript and React to bring creative ideas to life.
            <br></br>
            <br></br>From building responsive websites to designing intuitive user interfaces, I strive to create engaging digital solutions that leave a lasting impression. Explore my work and feel free to reach out — I'm always excited to collaborate and tackle new challenges!</p>
        </div>
    )
};

export default Home;
