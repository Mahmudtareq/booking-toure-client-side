import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPhone,
    faClock,
    faAddressBook,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { Form } from 'react-bootstrap';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        
    <div>
            <div className="footer-container bg-dark p-3 mb-3">
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-md-3 text-white">
                            <div className="left-container text-start ">
                                <h3 className="text-secondary">Incredible Vacations</h3>
                                <div className="icons-container d-flex text-center ">
                                </div>
                                <p className="mt-2 ">
                                    <p className="mt-2 text-muted">
                                    Hi, I am Preshana Pillay. I am an Independent Travel Consultant. I have worked in the corporate and leisure sectors of the travel industry for more than  twenty years
                                        
                                    </p>
                                    <p className="text-info">
                                        We  always try to Providing our best service for any kind of situation .We try to Provide World Class Service
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 text-white">
                            <h3 className=" text-secondary text-start">Contact Information</h3>
                            <div className=" footer-menu-container mt-4 text-start">
                                <p className="">
                                    <small><FontAwesomeIcon icon={faAddressBook} />  <span className="text-info">Mipur ,Dhaka</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faEnvelope} />  <span className="text-info">travelTour@gmail.com</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faFacebook} /> <span className="text-info">www.facebook.com</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faPhone} /> <span className="text-info">+8801759539770</span> </small>
                                </p>

                            </div>
                        </div>

                        <div className="col-md-3 text-white">
                            <h3 className="text-secondary text-start">Services</h3>
                            <div className="right-footer-container mt-4 text-start p-2">
                                <p>About Us </p>
                                <p>Contact Us</p>
                                <p>Travel Guide</p>
                                <p>Hotel Booking</p>
                                <p>Flight Booking</p>
                                <p>Ticket Booking</p>
                            </div>
                        </div>
                        <div className="col-md-3 bg-secondary p-2 rounded">
                            <h2 className="text-primary text-start">Newsletter</h2>
                            <Form className="my-5">
                                <input type="text" name="" id="input" class="form-control" value="" required="required" title="" placeholder="Name" />
                                <br />

                                <input type="Email" name="" id="input" class="form-control" required="required" title="" placeholder="Email" />
                                <br />

                                <button type="submit" class="btn btn-info w-100 text-white">SUBSCRIBE</button>
                            </Form>

                        </div>
                    </div>
                </div>
                <div className="bg-secondary rounded p-2">
                    <p className="mt-2 ">
                        <small className="text-white fs-5 ">Tareq © mahmud . All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
            
    );
};

export default Footer;