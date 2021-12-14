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
                        <H3>Kids</H3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora vitae autem animi libero esse, non repellat suscipit, eos natus quam velit culpa sit accusantium consequuntur. Fuga autem odio labore?</p>
                    </div>
                <div className="col-md-4 neumophorism">
                        <H3>Women</H3>
                      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit nemo, sequi, repudiandae itaque veniam magnam quae soluta exercitationem sapiente harum quo rerum odio quod provident similique delectus voluptatem aliquid?</p>
                    </div>
                <div className="col-md-3 neumophorism">
                        <H3>Man</H3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In neque omnis architecto dolorem perspiciatis tempora, tenetur eveniet, quam officia corporis deserunt repudiandae corrupti, harum dolore laboriosam qui cupiditate autem. Ex.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Features;