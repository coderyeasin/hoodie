import React from 'react';
import { Carousel } from 'react-bootstrap';
import cover from'../../../../images/slide/slide1-min.jpg'
import cover1 from'../../../../images/slide/slide2-min.jpg'
import cover2 from'../../../../images/slide/slide3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={cover}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non assumenda voluptates culpa id eligendi enim dolore tempore officiis aut molestias sint, rem laudantium, eveniet voluptate blanditiis omnis et, doloribus cumque.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non assumenda voluptates culpa id eligendi enim dolore tempore officiis aut molestias sint, rem laudantium, eveniet voluptate blanditiis omnis et, doloribus cumque.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={cover1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={cover2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;