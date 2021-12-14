import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='py-5' style={{background:'gray'}}>
            <Container>
                <Row>
                    <div className="col-md-3">Address</div>
                    <div className="col-md-3">Exclusive Offer</div>
                    <div className="col-md-3">Follow US</div>
                </Row>
           </Container>
        </div>
    );
};

export default Footer;