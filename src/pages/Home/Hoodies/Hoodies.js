import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Hoodies = () => {

    const [place, setPlaced] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/hoodies')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaced(data)
            })
    }, [])
    

    

    
    return (
        <div className='text-light' id='hoodies'>
            <h6>Best Hoodie style with two different shapes</h6>

            <Container>
                <Row xs={1} md={2} className="">
               
                    {place?.map(cloth => <div className='d-flex flex-wrap col-md-3 g-3'key={cloth?._id}  >
                        <Card className='neumophorism' >
                         <Card.Img variant="top" className='image' height="320px" width="350px"  src={cloth?.image} />
                         <Card.Body>
                                <Card.Title className='text-success'>{cloth?.title} </Card.Title>
                         <Card.Text className='text-success'>
                            {cloth?.description}
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                                <small className="text-muted">Button with hover</small>
                                <Link to={`/details/${cloth?._id}`} className='btn btn-outline-warning'>
                                        Buy
                                </Link>
                         </Card.Footer>
                     </Card>
                    
                     </div>
                    )}
                  
                </Row>
            </Container>
        </div>
    );
};

export default Hoodies;