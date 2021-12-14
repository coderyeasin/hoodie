import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import dummy from '../../../images/dummy.jpg'
import { H3 } from '../../../styles/Elements';

const Latest = () => {
    return (
        <div className='my-5 text-light'>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <div className="col-md-6">
                        <img className='img-fluid' src={dummy} alt="" />
                    </div>
                    <div className="col-md-6">
                        <H3>Winter collection</H3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis deserunt vitae, vel fuga hic, natus quo nostrum delectus non reiciendis cumque a, laboriosam quam nemo. Dolor impedit at voluptatibus corrupti!</p>
                        <Button>View More</Button>
                    </div>
                </Row>
                <Row className='justify-content-center align-items-center'>
                    <div className="col-md-6">
                    <H3>Winter collection</H3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis deserunt vitae, vel fuga hic, natus quo nostrum delectus non reiciendis cumque a, laboriosam quam nemo. Dolor impedit at voluptatibus corrupti!</p>
                        <Button>View More</Button>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={dummy} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Latest;