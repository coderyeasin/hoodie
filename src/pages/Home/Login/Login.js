import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub,FaTwitter } from 'react-icons/fa';

// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

import { Alert, Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../images/dummy.jpg'
import useFirebase from '../../../Hooks/useFirebase';
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom';

const Login = () => {

    const { user, errors, googleProvider, userSignIn } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data)
        // else {
        if (!(data.email && data.password)) {
            Swal.fire(
                'Good job!',
                `${errors}`,
                'success'
            )
            reset()            
        }
        userSignIn(data.email, data.password, location, navigate)


    };
     
    return (
        <div>

            
            <Container className='pt-5'>
                <Row className="pt-5">
                    <div className="col-md-6">
                                <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3 style={{color:'#a17154'}} className="mb-3">Please Login</h3>
            {/* {
                errors && <Alert variant="danger" onClose={() => setErrors(false)} dismissible>
                <Alert.Heading>Wrong Email/Password! Please Provide valid info</Alert.Heading>
                </Alert>
                } */}
           

             <form onSubmit={handleSubmit(onSubmit)}>

                <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true })} /> <br />
                
                <input className="mb-3" type="password" placeholder="Password" {...register("password", {required: true, maxLength: 100})} /> <br />

                <input className="my-3 border-0 p-2 bask_btn rounded" type="submit" value="Login" /> <br />

            </form>
            <p className="text-center my-3 fw-bold" style={{color:'#a17154'}}>USING SOCIAL MEDIA</p>
                
            <ButtonGroup>
            <Button onClick={googleProvider} className="bask_btn border-0"> <FaGoogle /> Google</Button>
            
                <Button  className="bask_btn border-0"> <FaFacebook /> Facebook</Button>
                
                <Button className="bask_btn border-0"> <FaGithub /> Github</Button>
                
            <Button className="bask_btn border-0"> <FaTwitter /> Twitter</Button>

           </ButtonGroup>
                    </div>
                </Row>
          </Container>
        </div>
    );
};

export default Login;