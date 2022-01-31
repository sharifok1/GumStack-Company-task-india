import React from 'react';
import "./Navigation.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../asset/logo.jpg"

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navStyle'>
                <Container>
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /><span className='brandName'>Gumstack</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <NavDropdown title="Use Cases" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#"className='mt-2'>Retail</NavDropdown.Item>
                        <NavDropdown.Item href="#"className='mt-2'>E-Commerce</NavDropdown.Item>
                        <NavDropdown.Item href="#"className='mt-2'>SaaS</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey={2} href="#memes" className='mx-4'>
                        How it works 
                    </Nav.Link>
                    <Nav.Link eventKey={3} href="#memes" className='mx-4'>
                        Pricing
                    </Nav.Link>
                    <Nav.Link eventKey={4} href="#memes" className='mx-4'>
                        Sign in
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Navigation;