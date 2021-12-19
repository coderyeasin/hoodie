import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Features.css'
import { H3 } from '../../../styles/Elements';

const Features = () => {
    return (
        <div className='text-light'>
            <Container fluid>

            <Row className='gap-3 py-3 align-items-center justify-content-center'>
                <div className="col-md-4 neumophorism">
                        <H3>MEN'S HOODIES & SWEATS</H3>
                        <p style={{lineHeight:'30px', textAlign:'justify'}}>Take one for the team in a hoodie or sweat from the boohooMAN on-trend edit. Touch base with the '90s in a bomber jacket where there’s only one rule: the bolder the print, the better! Stay on trend in a sleeveless sweatshirt – perfectly paired with a jersey tank top - or update your look with quilted textures and you’ll be the coolest kid on the block!</p>
                    </div>
                <div className="col-md-4 neumophorism">
                        <H3>WOMEN's HOODIES & SWEATS</H3>
                      <p style={{lineHeight:'30px', textAlign:'justify'}}>  Sweats and Sweatpants for Women Designed for everyday comfort, our sweats for women are made for adventures out or lounging at home. If you’re searching for sweat tops, explore our hoodies and sweatshirts like our signature Salt & Pepper Original Kanga Hoody and Original Crew Sweatshirt.</p>
                    </div>
                <div className="col-md-3 neumophorism">
                        <H3>HOODIES</H3>
                        <p style={{lineHeight:'30px', textAlign:'justify'}}> To keep cozy from head to toe, pair your sweat top with pants and bottoms like sweatpants, trackpants, joggers, sweatshorts and sweat skirts. We even have comfortable sweat dresses like our bestselling Edith Dress. For sweat-on-sweat style, suit up with our matching sweatsuit sets in our ultra-soft fleece or lounge lightly in french terry. Looking for the perfect sweatpant? Find your fit with our Sweatpant Fit Guide. Our sweats are designed in different fits for your comfort; choose from skinny, slim, original and boyfriend.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Features;