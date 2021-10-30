import React from 'react';
import { Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import OurServices from '../OurServices/OurServices';
import feture1 from '../../image/services/feature-1.jpg';
import feture2 from '../../image/services/feature-2.jpg';
import feture3 from '../../image/services/feature-3.jpg';


const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <OurServices></OurServices>
            <div className=" my-5">
                <p >TRAVIO SPECIALS</p>
                <h1 className="mb-4">Why Travel with Tutive?</h1>
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
           <Footer></Footer>
        </div>
    );
};

export default Home;