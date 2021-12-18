import React from 'react';
import { Accordion, Button, Container, Row } from 'react-bootstrap';
import back from '../../../images/slide/slide5-min.jpg';

const About = () => {
    const cover = {
        background: `url(${back})`,
        backgroundImage: '  linear-gradient(0deg, rgba(25, 53, 68, 0.759), rgba(2, 17, 24, 0.761))',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <div className='py-5 my-5' style={cover}>
            <Container>
                <Row className='align-items-center'>
                    <div className="col-md-6 text-light">
                    <h3>Spread it with Spreadshirt</h3>
                    
                        <p className='text-justify'>
A global platform for personalized clothing and accessories, we are the go-to-place for anyone looking to realize their creative ideas on quality fabrics. We value freedom of expression, whether it’s with your own designs or those made available by our community. T-shirts, sweaters, bags, aprons and a lot more can easily be personalized with images and custom text. Moreover, Spreadshirt is an ideal custom merchandise partner: Emerging YouTube stars and a large number of large companies and brands are among our esteemed customers. Our top-quality prints, custom t-shirts and services will make sure that your business hits it big.
                        </p>
                        <Button>Know more</Button>
                    </div>
                    <div className="col-md-6">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ensure Qualities</Accordion.Header>
                            <Accordion.Body>
                            we are the go-to-place for anyone looking to realize their creative ideas on quality fabrics. We value freedom of expression, whether it’s with your own designs or those made available by our community.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Customer Support</Accordion.Header>
                            <Accordion.Body>
                            We are currently busier than expected and it may take up to 24 hours for us to respond to your message.
Please do not chase your first message to us as this will cause it to go to the back of the queue.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Fast Delivery</Accordion.Header>
                            <Accordion.Body>
                           
You have 28 days, from the day you receive it, to send something back. For hygiene reasons, we cannot offer refunds on fashion face masks, cosmetics, pierced jewellery, swimwear or lingerie, if the seal has been broken or is no longer in place.


                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Return Policy</Accordion.Header>
                            <Accordion.Body>
                            Returns are quick and easy; they'll usually be processed in as little as 5 to 7 days! We’ve gone paperless, you can return via our returns portal here

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>FAQ</Accordion.Header>
                            <Accordion.Body>
                            If you need further any query please contact to us.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;