import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../Assets/CSS/Bootstrap.min.css';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div class='title-name'>
                <h1>Welcome To Football Club-Dhaka</h1>
            </div>
            <Navbar bg="dark" variant="blue" className='mt-0  nav-container'>
                <Container>
                    <Navbar.Brand href="#home" className="brand">FC Dhaka</Navbar.Brand>
                        <Nav className="me-auto nav-link">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Players">Players</Nav.Link>
                        <Nav.Link href="#Club">Club</Nav.Link>
                        <Nav.Link href="#Trophy">Winning Trophy</Nav.Link>
                        <Nav.Link href="#News">Club News</Nav.Link>
                        <Nav.Link href="#"></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;