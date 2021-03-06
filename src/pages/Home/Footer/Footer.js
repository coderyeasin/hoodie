import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaLocationArrow, FaPhone, FaGoogle, FaInstagram, FaCcAmex,FaCcVisa,FaStripe,FaCcMastercard, FaCcDiscover  } from 'react-icons/fa';


const Footer = () => {
    const bgFooter = {
        color: '#fff',
        background: '  linear-gradient(0deg, rgba(25, 53, 68, 0.759), rgba(2, 17, 24, 0.761))'
    }
    return (
        <div style={bgFooter}>
            <Container className=" py-5">
                <Row className='d-flex justify-content-center sm:align-items-center'>
                    <div className="col-md-1"></div>
                    <div className="col-md-3" style={{textAlign:'left', lineHeight:'30px'}}>
                    <h4 className="my-3"> Our Location </h4>
                        <div >
                            
                            <p > <FaLocationArrow /> Address: 500 Hennessy Road  <br />
                              Causeway Bay, Mitsubishi, NY </p> 
                            <span > <FaPhone /> +1 23456789  </span> <br />
                            <span > <FaEnvelope /> contact@hoodieadmin.com  </span> <br />
                             <br />
                       </div>
                    </div>
                    <div className="col-md-3" style={{textAlign:'left', lineHeight:'30px'}}>
                    <h4 className="my-3"> Top Brands </h4>
                                <nav>
                                    <ul style={{listStyle:'none'}}>
                                        <li>GAP Hoodies</li>
                                        <li>Adidas Hoodies</li>
                                        <li>Nike Hoodies</li>
                                        <li>Puma Hoodies</li>
                                        <li>Zara Hoodies</li>
                                        <li>D&G Hoodies</li>
                                        <li>H&M Hoodies</li>
                                    </ul>
                                </nav>
                    </div>
                    <div className="col-md-2" style={{textAlign:'left', lineHeight:'30px'}}>
                    <h4 className="my-3" > Popular Links </h4>
                                <nav>
                                    <ul  style={{listStyle:'none'}}>
                                        <li>Features</li>
                                        <li>About us</li>
                                        <li>Products</li>
                                        <li>Hoodies</li>
                                        <li>Purchase</li>
                                        <li>Contact us</li>
                                        <li>Privacy Policy</li>
                                        
                                    </ul>
                                </nav>
                    </div>
                    <div className="col-md-2" style={{textAlign:'left', lineHeight:'30px'}}>
                        <h4  className="my-3"> Follow us </h4>
                        <div >                          
                            <span >   <FaGoogle /> Google      </span> <br />
                            <span >   <FaYoutube /> Youtube      </span> <br />
                            <span >   <FaInstagram /> Instagram     </span> <br />
                            <span >   <FaFacebook /> Facebook      </span> <br />
                            <span >   <FaTwitter /> Twitter      </span> <br />
                             <br />
                       </div>
                    </div>
                    <div className="col-md-1"></div>

                    <hr className="w-75 mx-auto" />
                    <div className="d-flex" style={{justifyContent:'space-around'}}>
                        <p> Copyrights &copy; All rights reserved</p>
                        <div>
                        <p>Accept Payments: <FaCcAmex /> <FaCcVisa /> <FaStripe /> <FaCcMastercard /> <FaCcDiscover /> </p>
                        </div>
                    </div>
                </Row>
             
            </Container>
        </div>
    );
};

export default Footer;