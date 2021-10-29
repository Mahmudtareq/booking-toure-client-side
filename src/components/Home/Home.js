import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <div className="container">
                <h2 className="my-5">Our Services</h2>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;