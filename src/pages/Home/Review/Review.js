import React, { useEffect, useState } from 'react';
import { H3 } from '../../../styles/Elements';
import Rating from 'react-rating';
import { Card, Container, Row } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa';

const Review = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                const star = data.filter(r => r.rating && r.feedbacks)
                setReview(star)
            })
    },[])

    return (
        <div className='text-light'>
            <H3>Get user Dynamic feedback with name n rating</H3>
            
         


        <Container>
                <Row xs={1} md={2} className="">
               
                    {review?.map(star => <div className='d-flex flex-wrap col-md-3 g-3'key={star?._id}  >
                        <Card className='neumophorism' >
                         <Card.Body>
                                <Card.Title className=''>
  
                                <Rating
                                    initialRating={star?.rating}
                                    emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star" className="text-warning"
                                        readonly
                                    >
                                     </Rating>

                                </Card.Title>
                            <Card.Text className='text-success'>
                            {star?.feedbacks}
                                    
                             </Card.Text>
                         </Card.Body>
                     </Card>
                    
                     </div>
                    )}
                  
                </Row>
            </Container>
        </div>
    );
};

export default Review;