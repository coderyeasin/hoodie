import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import useHoddies from '../../../../Hooks/useHoddies';
import cover from'../../../../images/slide/slide1-min.jpg'
import cover1 from'../../../../images/slide/slide2-min.jpg'
import cover2 from'../../../../images/slide/slide3.jpg'
import { H3 } from '../../../../styles/Elements';
import './Banner.css'

const Banner = () => {
    const { hoodie, categories } = useHoddies();
    return (
      <div className="">
        <Container className="mb-5 py-3">
          <Row className=" d-flex justify-content-center align-items-center">
            <div className="slide col-md-8 neumophorism">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src={cover}
                    style={{ borderRadius: "30px" }}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Mid-Night Hoodie</h3>
                    <p style={{ lineHeight: "30px" }}>
                      Whenever the crisp air of fall and winter arrives, coats
                      and jackets are needed for protection from the cold
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src={cover1}
                    style={{ borderRadius: "30px" }}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Hills Hoodie</h3>
                    <p style={{ lineHeight: "30px" }}>
                      you've come to the right place! Our Premium Hoodie is
                      everything you
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src={cover2}
                    style={{ borderRadius: "30px" }}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Travel Hoodie</h3>
                    <p style={{ lineHeight: "30px" }}>
                      {" "}
                      it's warm and cozy, heavyweight and roomy, and built to
                      last
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4" style={{ color: "#c8ced4" }}>
              <Row className="gap-3 py-3">
                <div className="neumophorism py-3">
                  <H3>Latest Hoodies</H3>
                  {hoodie.map((e) => {
                    return (
                      <div key={e.id} style={{ padding: "3px" }}>
                        <span
                          style={{
                            borderBottom: "2px solid #135cd1",
                            padding: "5px 0px 0px 0px",
                          }}
                        >
                          {e?.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className=" neumophorism">
                  <H3>Categories</H3>
                  {hoodie.map((e) => {
                    return (
                      <div key={e.id} style={{ padding: "3px" }}>
                        <span
                          style={{
                            borderBottom: "2px solid #135cd1",
                            padding: "5px 0px 0px 0px",
                          }}
                        >
                          {e?.facilities}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className=" neumophorism">
                  <H3>KIDS</H3>
                  <p
                    className="p-3"
                    style={{ lineHeight: "30px", textAlign: "justify" }}
                  >
                    There’s no better feeling than watching the kiddos open
                    their gifts and seeing the huge smile on their faces when
                    they unwrap something they love. So you’ve scrolled all the
                    way down here hoping to find the perfect gift for the
                    special little one in your life?{" "}
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;