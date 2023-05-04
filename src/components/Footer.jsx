import React from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from "../assets/logo.jpg"

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <img src={logo} alt="" />
                    <h3>ECOMMERCE_TEC</h3>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;