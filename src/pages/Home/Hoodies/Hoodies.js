import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useHoddies from '../../../Hooks/useHoddies';
import { H3 } from '../../../styles/Elements';
import './Hoodies.css';

const Hoodies = () => {
    const {place} = useHoddies()
    const { isLoading } = useAuth()    
    
    return (
        <div className='text-light' id='hoodies'>
               {isLoading && <div>
                <Spinner animation="border" role="status">
            </Spinner>
            </div>}

            <H3>Choose Best Qualities Hoodies</H3>

            {!isLoading &&  <Container  className='my-5'>
                <Row xs={1} md={2} className="">
               
                    {place?.map(cloth => <div className='d-flex flex-wrap col-md-4 g-3'key={cloth?._id}  >
                        <Card className='neumophorism cool-card' >
                            <Card.Img variant="top" className='image' height="320px" width="350px" src={cloth?.image} />
                            
                         <Card.Body className='cool-btn'>
                                <Card.Title className='text-light fs-4'>{cloth?.title} </Card.Title> <br />

                                <Link to={`/details/${cloth?._id}`} className='details-btn fs-5'>
                                        Order 
                                </Link>
                                
                         </Card.Body>
                     </Card>
                    
                     </div>
                    )}
                  
                </Row>
            </Container>}
        </div>
    );
};

export default Hoodies;