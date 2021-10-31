import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner/banner1.jpg';
import banner2 from '../../image/banner/banner2.jpg';
import banner3 from '../../image/banner/banner3.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <div className="">
    <Carousel>       
        <Carousel.Item interval={1000}>
        <img
        className="d-block w-100"
        src={banner1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h1 className="text-white">Your Journey Begins Here</h1>
        <p className="text-info fs-4">Where You Like to go ?</p>
        </Carousel.Caption>
  </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1 fs-1> Explore
                    <br />
                    Your Travel

                </h1>
                <p>Discover your next great adventure, become an explorer to get started</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1>WELCOME 
                      <small>  To The Travel</small>
                </h1>
                <p>Where Would You Like To Go ?</p>
                </Carousel.Caption>
            </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;