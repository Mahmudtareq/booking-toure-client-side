import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
            <MenuBar></MenuBar>
            {/* ----------------------------------- */}
         <div className="">
            <div className=" banner-page">
                <div className="">
                <button className="btn btn-primary px-5 mt-5">
                    <NavLink className="text-white text-decoration-none" to="/home">Go Back Home</NavLink>
                </button>
                <p className="fs-1 mt-2 text-black">LOGIN PAGE</p>

                </div>
                
             
             
            </div>
                     

            </div>
            <div className="bg-light">
                <from>
                    <h2 className="mb-3 text-info">Please Login</h2>
                    <input className="form-control w-25 mx-auto" type="email"  name="" id="" placeholder="Email" required />
                    <br />
                    <input className="form-control w-25 mx-auto" type="password" name="" id="" placeholder="Password" required />
                    <br />
                    <input  className="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" htmlFor="flexCheckChecked">
                        Already Registered ?
                    </label>
                    <span className="ms-2 text-danger">For New User ? <NavLink to="/register">Create Account</NavLink></span>

                    <br />
                    <input  className="form-control w-25 mx-auto mt-3 bg-info" type="submit" value="Submit" />
                </from>
                <button onClick={signInWithGoogle} className="my-3 mx-auto btn bg-primary px-4"><span className="text-danger me-3
                "><FontAwesomeIcon icon={faGoogle} /></span>   Google LogIn</button>

                </div>
                <Footer></Footer>
        </div>
    );
};

export default Login;