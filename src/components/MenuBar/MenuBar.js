import React from 'react';
import {Navbar ,Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


const MenuBar = () => {
    // const {user ,logOut} =useFirebase()
    const {user , logOut} = useAuth();

    return (
        <>
        <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-info fs-6" href="#home">
                    Incredible Vacations
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {/* dropdown start */}
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link}  to ="/addService">AddService</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/showAllServices">ShowAllServices</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageOrder">ManageOrder</NavDropdown.Item>
                    </NavDropdown>
                    {/* dropdown end */}
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    {user.email ?
                            <button onClick={logOut} className="btn btn-info">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                            <span className="fs-5 text-info">
                                Signed in as :
                            </span>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

       
        </>
            
       
    );
};

export default MenuBar;