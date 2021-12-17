import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import img from '../../../images/dummy.jpg'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom';


const Register = () => {

    const { errors, isLoading, createAuthUser } = useFirebase();
    // const location = useLocation();
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        if (data.password !== data.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errors}`,
                // footer: '<a href="">Why do I have this issue?</a>'
            })
            reset()
            return
        }

        else {
            
            createAuthUser(data.email, data.password, data.name, navigate)
            Swal.fire(
                'Good job!',
                'Find Best Hoodie!',
                'success'
            )
            reset()
        }
    }
     
    return (
        <div>
             {isLoading && <div>
                <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>}

            {!isLoading &&
                <Container>
                <Row className="pt-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3 style={{color:'#a17154'}} className="mb-3">Please Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mb-3" type="text" placeholder="Your name" {...register("name", { required: true, maxLength: 80 })} /> <br />
                        
                        <input className="mb-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />
                        
                        <input className="mb-3" type="password" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} /> <br />
                        
                            <input className="mb-3" type="password" placeholder="Re-type Password" {...register("password2", { required: true, maxLength: 100 })} /> <br />

                        <input className="my-3 border-0 py-2 bask_btn rounded" type="submit" value="Registration"  />
                    </form>

                   
                    </div>
                </Row>
               </Container>}
        </div>
    );
};

export default Register;