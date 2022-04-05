import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { H3 } from '../../../styles/Elements';
import './Explore.css'

const Explore = () => {
    const { id } = useParams();    
    const [view, setView] = useState([])

    const [show, setShow] = useState(false);
    const {isLoading}= useAuth()

    useEffect(() => {
        fetch('https://warm-falls-65459.herokuapp.com/hoodies')
            .then(res => res.json())
            .then(data => {
                const hoodie = data.filter(e => e.title && e.facilities && e.description)
                setView(hoodie.slice(5, 15))
            })
    },[])



    return (
      <div className="py-5">
        {!isLoading && (
          <Container>
            <Row xs={1} md={2}>
              {view?.map((cloth) => (
                <div className="w-100 g-3 items" key={cloth?._id}>
                  <Card className="d-flex flex-row w-100 neumophorism items">
                    <Card.Img
                      variant="top"
                      className="image"
                      height="320px"
                      width="350px"
                      src={cloth?.image}
                    />
                    <Card.Body className="mx-auto ">
                      <Card.Title className="text-light">
                        {" "}
                        <H3>{cloth?.title}</H3>{" "}
                      </Card.Title>
                      <Card.Text
                        className="text-light w-100"
                        style={{ lineHeight: "30px", textAlign: "justify" }}
                      >
                        {cloth?.description} <br />
                      </Card.Text>
                      <Card.Text className="text-light">
                        Location: {cloth?.location}
                      </Card.Text>
                      <Card.Text className="text-light">
                        Size: {cloth?.type}
                      </Card.Text>
                      <Card.Text className="text-light">
                        {cloth?.facilities}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center align-items-center">
                      <Link
                        to={`/details/${cloth?._id}`}
                        className="btn btn-primary"
                        style={{
                          background:
                            "linear-gradient(45deg, #17262c, #0a1c24)",
                        }}
                      >
                        Confirm
                      </Link>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </Row>
          </Container>
        )}
        {isLoading && (
          <div>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
};

export default Explore;