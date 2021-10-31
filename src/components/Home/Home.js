import React from 'react';
import { Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import OurServices from '../OurServices/OurServices';
import feture1 from '../../image/services/feature-1.jpg';
import feture2 from '../../image/services/feature-2.jpg';
import feture3 from '../../image/services/feature-3.jpg';
import about1 from '../../image/home/about1.png';
import about2 from '../../image/home/about2.png';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="my-5" animation="border" variant="primary" />
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <OurServices></OurServices>
            <div className=" my-5">
                <p >Trevily SPECIALS</p>
                <h1 className="mb-4 text-primary">Why Travel with Trevily?</h1>
            <div className="container  my-5">
                <div className="row g-4">
                    <div className="col-lg-4 col-12">
                    <Card style={{ width: '18rem' }}>
  <                 Card.Img variant="top" src={feture1}/>
                   <Card.Body>
                    <Card.Text>
                    2000+ Our Worldwide
                     <br /> Guides
                    </Card.Text>
             </Card.Body>
            </Card>
                    </div>
                    <div className="col-lg-4 col-12">
                    <Card style={{ width: '18rem' }}>
  <                 Card.Img variant="top" src={feture2}/>
                   <Card.Body>
                 
                    <Card.Text>
                    100% Trusted Tour 
                    <br /> Agency
                    </Card.Text>
             </Card.Body>
            </Card>


                    </div>
                    <div className="col-lg-4 col-12">
                    <Card style={{ width: '18rem' }}>
  <                 Card.Img variant="top" src={feture3}/>
                   <Card.Body>
                    <Card.Text>
                    12+ Years of Travel 
                    <br />
                    Experience
                   
                    </Card.Text>
             </Card.Body>
            </Card>
            </div>
            </div>
        </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <img className="img-fluid" src={about1} alt="" />

                </div>
                <div className="col-lg-6 col-12 my-3">
                    <h2 className="text-start text-primary">Plan Your Trip with 
                        <br />
                        Trevily</h2>
                        <p className="text-start">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

                        <h5 className="text-start mt-4">Invest in your simply neighborhood</h5>
                        <h5 className="text-start">Support people in free text extreme need</h5>
                        <h5 className="text-start">Largest global industrial business community</h5>
                        <p className="text-start mt-3">
                        <button className="btn btn-danger">Book With Us Now</button>
                        </p>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h2  className="text-start text-primary">We’re Travel Agency</h2>
                    <ul>
                        <li className="text-start">Trust and Safety</li>
                        <li className="text-start">Easy & Quick Booking</li>
                        <li className="text-start">Best Price Guarantee</li>
                        <li className="text-start">Best Travel Agents</li>
                    </ul>
                     <h4 className="text-start text-danger">Change your Place to get Fresh Air</h4>
                     <p className="text-start mt-4">Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale</p>
                     <p className="text-start mt-4">
                        <button className="btn btn-danger">Book With Us Now</button>
                        </p>
                    

                </div>
                <div  className="col-lg-6 col-12">
                <img className="img-fluid" src={about2} alt="" />

                </div>
            </div>
        </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;