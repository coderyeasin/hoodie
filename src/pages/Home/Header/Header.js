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




const Header = () => {

    const [open, setOpen] = useState(false);

    const { user,logOut } = useFirebase();
    
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     

//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
    
    return (
        <div>
            
                <Navbar  className="" fixed="top" expand="lg" defaultActiveKey="/home"  style={{ maxHeight: '100px', background: 'linear-gradient(135deg, rgba(30, 39, 44, 0.345), rgba(35, 51, 59, 0.345))'}}>
                <Container>
                    <Navbar.Brand href="#">Hoodie-Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav variant="pills"
                        className="ms-auto my-2 my-lg-0 boxes"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <HashLink  className='text-light text-decoration-none mx-2 btn btn-outline-warning' to="/home#">Home</HashLink>
                        <HashLink className='text-light text-decoration-none mx-2 btn btn-outline-warning' to="/home#">Features</HashLink>                           
                        <HashLink className='text-light text-decoration-none mx-2 btn btn-outline-warning' to="/home#">Hoodies</HashLink>
                                <HashLink className='text-light text-decoration-none mx-2 btn btn-outline-warning' to="#">Explore</HashLink>
                                    
                            {user?.uid ? 
                                
                                <div> 
                                    <Button onClick={logOut}> {user?.displayName} Logout</Button>
                                </div>
                            
                                : <div>
                            <button style={{background:'0'}} onClick={onOpenModal}> <FaUser className='text-danger' /> </button>
                                <Modal classNames="mt-5" open={open} onClose={onCloseModal} center  >
                                
                                <Tabs defaultActiveKey="login" id="" className='' >
                                        <Tab eventKey="login" title="Login">
                                            <Login> </Login>
                                        </Tab>
                                        <Tab eventKey="register" title="Register">
                                           <Register></Register>
                                        </Tab>
                    
                                        </Tabs>
                                </Modal>
                                  </div>}

                                

                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}

                    </Nav>
                
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <Banner></Banner>

          
        </div>
    );
};

export default Header;