import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import dummy from '../../../images/slide/slide4.jpg'
import dummy1 from '../../../images/slide/slide5-min.jpg'
import { H3 } from '../../../styles/Elements';

const Latest = () => {
    return (
        <div className='my-5 text-light'>
            <Container fluid>
                <Row className='justify-content-center align-items-center ms-2'>
                    <div className="col-md-6">
                        <img className='img-fluid' src={dummy} alt="" />
                    </div>
                    <div className="col-md-6">
                        <H3>We love what we do</H3>
                        <p className='text-justify' style={{lineHeight:'30px'}}>At Hoodie Group, we believe that you need to love what you do to make our customers love what they get. That’s why we were the world’s first company to introduce a feel-good manager in 2011. Feel-good management brings about an atmosphere at work that gives our staff a feeling of belonging. An open and respectful culture is the diversely beating heart of our company, with activities such as yoga, free fruits, and BBQs contributing to an atmosphere where people feel integrated in the workplace. And the feel-good atmosphere goes beyond those little perks – we prioritize our employees' changing needs, which requires a great deal of flexibility when accommodating the individual requirements every member of staff has. Our Community Guidelines give you an impression of how we define fair human relationships We value diversity as a guiding principle of our work.</p>
                        <Button>View More</Button>
                    </div>
                </Row>
                <Row className='justify-content-center align-items-center me-2'>
                    <div className="col-md-6">
                    <H3>Responsibility</H3>
                        <p className='text-justify' style={{lineHeight:'30px'}}> Christmas presents for kids, whatever they’re into. And when we say whatever, we mean it. With thousands of designs to choose from, you’re sure to find the perfect present—whether they’re a talkative toddler or a too-cool-for-school teen. Still reading this hoping we’ll reveal the perfect gift for your little nephew Tommy? Well, here are a few of our favorite boys gift ideas to get you started: what about a firetruck T-shirt or a superhero hoodie? Search for what little Tommy loves and you’re sure to find a good fit. And hey, if you can’t decide, you can always get that complicated teenager in your life a gift card. Good luck gift hunting!</p>
                        <Button>View More</Button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={dummy1} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Latest;