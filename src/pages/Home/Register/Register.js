import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import img from '../../../images/dummy.jpg'

const Register = () => {

    const { createAuthUser } = useFirebase();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        createAuthUser(data.email, data.password, data.name)
    }
     
    return (
        <div>
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
                        
                            <input className="mb-3" type="password" placeholder="re-type Password" {...register("password2", { required: true, maxLength: 100 })} /> <br />

                        <input className="my-3 border-0 py-2 bask_btn rounded" type="submit" value="Registration"  />
                    </form>

                   
                    </div>
                </Row>
               </Container>
        </div>
    );
};

export default Register;