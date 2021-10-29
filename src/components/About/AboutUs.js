import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './AboutUs.css';
import about1 from '../../image/about/about1.jpg';
import about2 from '../../image/about/about2.jpg';
import about3 from '../../image/about/about3.jpg';
import about4 from '../../image/about/about4.jpg';
import team1 from '../../image/about/team-1.jpg';
import team2 from '../../image/about/team-2.jpg';
import team3 from '../../image/about/team-3.jpg';
import { Accordion } from 'react-bootstrap';
import Footer from '../Footer/Footer';
const AboutUs = () => {
    return (
        <div>
          
                {/* menubar  */}
                <MenuBar></MenuBar>
           
            <div className=" banner-page">
                <div className="">
                <button className="btn btn-primary px-5 mt-5">
                    <NavLink className="text-white text-decoration-none" to="/home">Go Back Home</NavLink>
                </button>
                <p className="fs-1 mt-2 text-black">About Us</p>

                </div>
                
             
             
            </div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-lg-6 col-12">
                        <h1 className="text-start">
                            <span className="text-primary"> World Best Travel</span>
                       
                        <br /> Agency Company 
                        <br /> Since 2015.
                        </h1>
                        <p className="text-start my-3">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className="text-start mt-4">
                        <button className="btn btn-danger px-5 fs-4">Find Tours</button>
                        </p>

                        

                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={about1} className="img-fluid" alt="" />

                    </div>
                </div>
            </div>
            <div>

        <div className="container my-5">
              <p>CHOOSE YOUR PLACE</p>
             <h1 className="mb-5">Popular Destinations</h1>
            <div className="row">
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={about2} className="card-img-top" alt="..."/>
            
         <div className="card-body">
         <h3 className="mt-2 text-start text-info">Himachal Pradesh</h3>
             <p className="card-text text-start">Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. </p>
           </div>
              </div>

            </div>
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={about3} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h3 className="mt-2 text-start text-info">Dal Lake Kashmir</h3>
             <p className="card-text text-start">Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake</p>
           </div>
              </div>

            </div>
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={about4} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h3 className="mt-2 text-start text-info">Cox’s Bazar</h3>
             <p className="card-text text-start">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long</p>
           </div>
              </div>

            </div>

        </div>

        </div>
        {/* toure giude */}

        <div className="container my-5">
              <p>TOUR GUIDE</p>
             <h1 className="mb-5">Expert Tour Guides</h1>
            <div className="row">
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={team1} className="card-img-top" alt="..."/>
            
         <div className="card-body">
         <h3 className="mt-2 text-start text-primary">Merrie Lewis</h3>
             <p className="card-text text-start">Tour Guide </p>
           </div>
              </div>

            </div>
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={team2} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h3 className="mt-2 text-start text-primary">Parks Missie</h3>
             <p className="card-text text-start">Tour Guide</p>
           </div>
              </div>

            </div>
            <div className="col-lg-4 mb-2">
            <div className="card">
             <img src={team3} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h3 className="mt-2 text-start text-primary">Mariana Buenos</h3>
             <p className="card-text text-start">Tour Guide</p>
           </div>
              </div>

            </div>

        </div>

        </div>

        <div className="container my-5 bg-light p-3">
            <h1 className="mb-4 text-secondary">FAQ'S</h1>
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
            <Accordion.Header>What does a tourism agency do?</Accordion.Header>
             <Accordion.Body className="text-start">
      
             Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>What are the types of travel agency?</Accordion.Header>
    <Accordion.Body className="text-start">
    There are two types of travel agencies viz., retail travel agency and wholesale travel agency. Both the travel agencies as well as tour operators act as intermediaries. They strengthen the buying and selling process in travel industry.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Why is travel agency important?</Accordion.Header>
    <Accordion.Body className="text-start">
    Travel agents facilitate customers to find out best possible travel arrangements. They recommend destinations and make arrangements for the hotel accommodations, car rentals, transportation, and tours for customers. Travelers may book tickets at their booking offices.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What are the types of tour?
</Accordion.Header>
    <Accordion.Body className="text-start">
    There are two types of travel agencies viz., retail travel agency and wholesale travel agency. Both the travel agencies as well as tour operators act as intermediaries. They strengthen the buying and selling process in travel industry.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</div>
        
    </div>
    <Footer></Footer>

    </div>


            

    );
};

export default AboutUs;