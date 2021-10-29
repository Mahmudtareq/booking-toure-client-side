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
                                <h3 className="text-secondary">Safe Medical Care</h3>
                                <div className="icons-container d-flex text-center ">
                                </div>
                                <p className="mt-2 ">
                                    <p className="mt-2 text-muted">
                                        Lashmipur Ssfe Hospital is big Private hospital of Lakshmipur district.Here is a lot of good quality Doctor for serve the people.
                                    </p>
                                    <p className="text-info">
                                        We  always try to Providing our best service for any kind of situation .We try to Provide World Class Service
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 text-white">
                            <h3 className=" text-secondary text-start">Get In Touch</h3>
                            <div className=" footer-menu-container mt-4 text-start">
                                <p className="">
                                    <small><FontAwesomeIcon icon={faAddressBook} />  <span className="text-info">Lakshmipur</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faEnvelope} />  <span className="text-info">safeMedical@gmail.com</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faFacebook} /> <span className="text-info">www.facebook.com</span> </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faPhone} /> <span className="text-info">+8801759539770</span> </small>
                                </p>

                                <p className="">
                                    <small><FontAwesomeIcon icon={faClock} />  Sat - Fri   <span className="text-info">24 Hours</span> </small>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 text-white">
                            <h3 className="text-secondary text-start">Departments</h3>
                            <div className="right-footer-container mt-4 text-start p-2">
                                <p>Surgery Department </p>
                                <p>Dental Department</p>
                                <p>Cardiology Department</p>
                                <p>Eye Department</p>
                                <p>Neurology Department </p>
                            </div>
                        </div>
                        <div className="col-md-3 bg-info p-2 rounded">
                            <Form className="my-5">
                                <input type="text" name="" id="input" class="form-control" value="" required="required" title="" placeholder="Name" />
                                <br />

                                <input type="Email" name="" id="input" class="form-control" required="required" title="" placeholder="Email" />
                                <br />

                                <button type="submit" class="btn btn-secondary w-100 text-white">SUBSCRIBE</button>
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