import React from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner/Banner';
import CarsProducts from './CarsProducts/CarsProducts';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarsProducts></CarsProducts>
            <DisplayReview></DisplayReview>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;