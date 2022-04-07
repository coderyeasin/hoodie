import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub,FaTwitter } from 'react-icons/fa';

// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

import { Alert, Button, ButtonGroup, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png'
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
        {!isLoading && (
          <Container className="pt-5">
            <Row className="pt-5">
              <div className="col-md-6">
                <img className="img-fluid" src={login} alt="" />
              </div>
              <div className="col-md-6">
                <h3 style={{ color: "#fff" }} className="mb-3">
                  Please Login
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="mb-3  pb-2"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "none",
                      borderBottom: "2px solid #fff",
                    }}
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />{" "}
                  <br />
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                      background: "none",
                      borderBottom: "2px solid #fff",
                    }}
                    className="mb-3  pb-2"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      maxLength: 100,
                    })}
                  />{" "}
                  <br />
                  <input
                    className="my-3 py-2 btn btn-primary"
                    style={{
                      background: "linear-gradient(45deg, #17262c, #0a1c24)",
                    }}
                    type="submit"
                    value="Login"
                  />{" "}
                  <br />
                </form>
                <p
                  className="text-center my-3 fw-bold"
                  style={{ color: "#0a1c24" }}
                >
                  USING SOCIAL MEDIA
                </p>

                <ButtonGroup
                  className="my-3 py-2 btn btn-primary"
                  style={{
                    background: "linear-gradient(45deg, #17262c, #0a1c24)",
                  }}
                >
                  <Button
                    onClick={handleGoogle}
                    style={{
                      background: "linear-gradient(45deg, #17262c, #0a1c24)",
                    }}
                  >
                    {" "}
                    <FaGoogle /> Google
                  </Button>

                  <Button
                    style={{
                      background: "linear-gradient(45deg, #17262c, #0a1c24)",
                    }}
                  >
                    {" "}
                    <FaFacebook /> Facebook
                  </Button>

                  <Button
                    style={{
                      background: "linear-gradient(45deg, #17262c, #0a1c24)",
                    }}
                  >
                    {" "}
                    <FaGithub /> Github
                  </Button>

                  <Button
                    style={{
                      background: "linear-gradient(45deg, #17262c, #0a1c24)",
                    }}
                  >
                    {" "}
                    <FaTwitter /> Twitter
                  </Button>
                </ButtonGroup>
              </div>
            </Row>
          </Container>
        )}
        {isLoading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
};

export default Login;