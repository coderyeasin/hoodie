import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Explore = () => {
    const { id } = useParams();

    const [view, setView] = useState([])

    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/hoodies')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setView(data)
            })
    },[])


    return (
        <div className='py-5' >
            <h3>Your id {id}</h3>
            
            <Container>
                <Row xs={1} md={2} className="">
               
                    {view?.map(cloth => <div className=' w-100 g-3' key={cloth?._id}  >
                        


                        <Card className='d-flex flex-row w-100 neumophorism' >
                         <Card.Img variant="top" className='image' height="320px" width="350px"  src={cloth?.image} />
                         <Card.Body>
                                <Card.Title className='text-success'>{cloth?.title} </Card.Title>
                         <Card.Text className='text-success w-100'>
                                    {cloth?.description} <br />

                                    <Link to={`/details/${cloth?._id}`} className='btn btn-outline-warning'>
                                        Confirm Order
                                    </Link>
                                    
                         </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                                <small className="text-muted">Button with hover + icon</small>
                               
                         </Card.Footer>
                     </Card>
                    
                     </div>
                    )}
                  
                </Row>
            </Container>












        </div>
    );
};

export default Explore;