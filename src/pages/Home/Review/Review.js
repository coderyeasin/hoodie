import React, { useEffect, useState } from 'react';
import { H3 } from '../../../styles/Elements';
import Rating from 'react-rating';
import { Card, Carousel, Container, Row } from 'react-bootstrap';
import { FaComment } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import dummy from '../../../images/dummy.jpg';

const Review = () => {

    const { user } = useAuth()

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://warm-falls-65459.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                const star = data.filter(r => r.rating && r.feedbacks)
                setReview(star)
            })
    },[])

    return (
        <div className='text-light my-5'>

        <Container>           
                <Row xs={1}>

                    <Carousel >
                                        
                            {review?.map(star => <Carousel.Item > <div className=''key={star?._id}  >
                                        <Card className='neumophorism' >
                                        <Card.Body className='p-3'>
                                                <Card.Title className=''>
                                                    <Rating
                                                        initialRating={star?.rating}
                                                        emptySymbol="far fa-star"
                                                        fullSymbol="fas fa-star" className="text-warning"
                                                        readonly
                                                    />
                                                    <h6 className='my-3'>{star?.name}</h6>
                                                </Card.Title>
                                            <Card.Text className='text-success'>
                                            {star?.feedbacks}
                                                    
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    
                               </div>
                            </Carousel.Item>
                             )}
                    
                 </Carousel>
               
                  
                    
            </Row>

            </Container>



        </div>
    );
};

export default Review;