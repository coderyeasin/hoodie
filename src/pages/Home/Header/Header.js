import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, OffcanvasHeader, Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import { HashLink } from 'react-router-hash-link';
import { useForm } from "react-hook-form";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Banner from './Banner/Banner';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Header.css';
import { FaUser } from 'react-icons/fa';
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';




const Header = () => {

    const [open, setOpen] = useState(false);

    const { user } = useAuth();
    
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            
                <Navbar  className="mb-3"  fixed="top" expand="lg" defaultActiveKey="/home"  style={{ maxHeight: '100px', background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}>
                <Container>
                    <Navbar.Brand href="#">Hoodie-Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav variant="pills"
                        className="ms-auto my-2 my-lg-0 boxes"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                            <HashLink className='text-light text-decoration-none mx-2' to="/home#">
                            <Button className='neumophorism' style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}> Home </Button>
                            </HashLink>
                            
                            <HashLink className='text-light text-decoration-none mx-2 ' to="/home#">
                            <Button className='neumophorism' style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}>  Features </Button>
                            </HashLink>                           
                            <HashLink className='text-light text-decoration-none mx-2 ' to="/home#hoodies">
                            <Button className='neumophorism' style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}>  Hoodies </Button>
                            </HashLink>
                            
                                <HashLink className='text-light text-decoration-none mx-2' to="/explore"><Button className='neumophorism' style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}> Explore </Button></HashLink>
                                    
                            
                            {user?.email ?
                               <div> 
                                    <Link to="/dashboard">
                                    <Button className='neumophorism' style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}> {user?.displayName} Dashboard </Button>
                                    </Link>
                                </div>
                                :

                                <div>
                                                                    
                            <button style={{ background: '0' }} onClick={onOpenModal}>
                             <FaUser className='text-dark ms-2' />
                            </button>
                                <Modal classNames="mt-5" open={open} onClose={onCloseModal} center  >
                                
                                <Tabs defaultActiveKey="login" id="" className='' onClose={onCloseModal} >
                                        <Tab eventKey="login" title="Login">
                                            <Login> </Login>
                                        </Tab>
                                        <Tab eventKey="register" title="Register">
                                           <Register></Register>
                                        </Tab>
                    
                                        </Tabs>
                                </Modal>
                            </div>
                             

                            }
  

                    </Nav>
                
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        

          
        </div>
    );
};

export default Header;