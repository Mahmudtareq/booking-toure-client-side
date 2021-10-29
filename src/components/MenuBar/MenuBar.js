import React from 'react';
import {Navbar ,Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MenuBar = () => {
    return (
        <>
        <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="text-primary" href="#home">
                        TRraVio
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        <Navbar.Text>
                            <span className="fs-5 text-info">
                                Signed in as :
                            </span>
                            <a href="#login">login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

       
        </>
            
       
    );
};

export default MenuBar;