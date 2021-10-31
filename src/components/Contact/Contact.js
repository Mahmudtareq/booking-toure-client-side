import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Contact = () => {
    return (
    <div>
            <MenuBar></MenuBar>
            <div className=" banner-page mb-5">
                <div className="">
                <button className="btn btn-primary px-5 mt-5">
                    <NavLink className="text-white text-decoration-none" to="/home">Go Back Home</NavLink>
                </button>
                <h2 className="fs-1 mt-2 text-info">Contact Us</h2>
                </div>
            </div>
    <div>
        <div className="container  overflow-hidden">
            <div className="row gx-4  shadow-lg">
                <div className="col-lg-4 col-12 mb-3">
                <div className="p-3 border bg-light">
                    <h2>Address</h2>
                    <p>31 park street, 5th Avenue,
                        Dhanmondy, Dhaka.</p>
                </div>
                </div>

                <div className="col-12 col-lg-4 mb-3 ">
                <div className="p-3 border bg-light">
                    <h2>Phone</h2>
                    <div>
                    <p className="mt-3">+0088124578955</p>

                    </div>
                </div>
                </div>

                <div className="col-12 col-lg-4">
                <div className="p-3 border bg-light">
                    <h2>Email</h2>
                   
                    <div className="mt-3">
                        <p>tareqlpu5@gmail.com</p>
                    </div>
                 
                </div>
                </div>

            </div>
       </div>
    </div>

            <div className="container my-5 bg-light p-4">
                <div className="row">
                    <div className="col-lg-6 col-12 my-5">
                        <h1 className="text-start ">Feel Free to Contact 
                            <br /> <span className="text-primary"> with us</span></h1>
                    <p className="text-start my-3">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua. Quis ultrices ipsum suspen ultrices gravida Risus commodo.</p>        


                    </div>
                <div className="col-lg-6 col-12">
                    <div className="mb-3 mt-4">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                    <br />
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                    <br />
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                    </div>
                    <div className="mb-3">
                    
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write Message" rows="3"></textarea>
                    </div>
                    <div className="text-start">
                    <button className="btn btn-primary px-5 py-2">Submit</button>

                    </div>
                    
                </div>
                            
            </div>
            </div>

            <Footer></Footer>
         
    </div>
    );
};

export default Contact;