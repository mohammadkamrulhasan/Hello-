import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;