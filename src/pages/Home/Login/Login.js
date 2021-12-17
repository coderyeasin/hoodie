import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub,FaTwitter } from 'react-icons/fa';

// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

import { Alert, Button, ButtonGroup, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../images/dummy.jpg'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const { user, errors, isLoading, googleProvider, userSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data)

        userSignIn(data.email, data.password, location, navigate)
        reset()
    };
    const handleGoogle = () =>{
        googleProvider(location, navigate)
    }

     
    return (
        <div>

          

            {!isLoading &&
                <Container className='pt-5'>
               
                    <Row className="pt-5">
                        <div className="col-md-6">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 style={{ color: '#a17154' }} className="mb-3">Please Login</h3>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                
                                <input className="mb-3" type="password" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} /> <br />

                                <input className="my-3 border-0 p-2 bask_btn rounded" type="submit" value="Login" /> <br />

                            </form>
                            <p className="text-center my-3 fw-bold" style={{ color: '#a17154' }}>USING SOCIAL MEDIA</p>
                
                            <ButtonGroup>
                                <Button onClick={handleGoogle} className="bask_btn border-0"> <FaGoogle /> Google</Button>
            
                                <Button className="bask_btn border-0"> <FaFacebook /> Facebook</Button>
                
                                <Button className="bask_btn border-0"> <FaGithub /> Github</Button>
                
                                <Button className="bask_btn border-0"> <FaTwitter /> Twitter</Button>

                            </ButtonGroup>
                        </div>
                    </Row>
                </Container>}
                {isLoading && <div>
                <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>}
        </div>
    );
};

export default Login;