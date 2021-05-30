import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div style={{ paddingLeft: "25px" }}>
                    <h1>About</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem fugiat tenetur temporibus cumque dignissimos perferendis magni facere animi at aut voluptas esse obcaecati error, possimus hic eveniet velit pariatur?</p>


                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem fugiat tenetur temporibus cumque dignissimos perferendis magni facere animi at aut voluptas esse obcaecati error, possimus hic eveniet velit pariatur?</p>


                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem fugiat tenetur temporibus cumque dignissimos perferendis magni facere animi at aut voluptas esse obcaecati error, possimus hic eveniet velit pariatur?</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;