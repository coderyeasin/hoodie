import React, { useEffect, useState } from 'react';
import { Accordion,Card, Container, Modal, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { Button, H3, Input, Textarea } from '../../../styles/Elements';
import './View.css';
import { useLocation } from 'react-router-dom';


const View = () => {

    const { id } = useParams();
    const { user } = useAuth()
    let navigate = useNavigate()


const [order, setOrder] = useState([])
const [collect, setCollect] = useState({})
    
const [show, setShow] = useState(false);

useEffect(() => {
    fetch('https://warm-falls-65459.herokuapp.com/hoodies')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setOrder(data)
        })
},[])

    useEffect(() => {
        const hoodie = order.find(e => e._id === id)
        setCollect(hoodie)
   },[order, id])
    
    
    
    
    
    
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "pending"
        data.price = `${collect?.price}`
        console.log(data)
        fetch('https://warm-falls-65459.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                alert('successfully added')
                navigate('/dashboard')
            }
        })
        
        reset()
       
    };
    

    
    return (
        <div>
            <h3>Your id {id}</h3>

            <Container className='py-5'>
                <Row className='neumophorism'>
                    <div className="col-md-6">
                        <img src={collect?.image} className='img-fluid py-3' style={{borderRadius:'30px'}} alt="" />

                        <div className='text-light'>
                            <h3 className='py-3'>{collect?.title}</h3>
                            <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat ad dolorum, recusandae ullam praesentium sint sapiente ducimus, officiis perferendis aspernatur veniam explicabo deleniti at placeat quia rem voluptatum est?</p>
                    </div>

                    </div>
                    <div className="col-md-6">
                {/* Facilities */}
                <div  className='text-light' style={{textAlign:'right'}}>
                                            <H3>Facilities</H3>
                                            <li className='list-unstyled fs-5'>Style: {collect?.facilities}</li>
                                            <li className='list-unstyled fs-5'>Store Location: {collect?.location}</li>
                                            <li className='list-unstyled fs-5'>Fitting: {collect?.type}</li>
                                            <li className='list-unstyled fs-4'>Price: ${collect?.price}</li>
                                        </div>

                    <Button className="my-3 text-light px-2"  style={{float:'right'}} onClick={() => setShow(true)}>
                            Review Order
                        </Button>

                        <Modal
                                
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton> <h3 className='text-light'>Selected Hoodie</h3>
                                <Modal.Title className="mx-auto" id="example-custom-modal-styling-title">
                                    <p >{collect?.name}</p>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="mx-auto w-75" >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    
         
                                    <Input className="mb-2 ps-2 w-100 "  defaultValue={collect?.title} {...register("serviceName")} />
                                    
                                <Input className="mb-2 ps-2 w-100 " placeholder='Default username' defaultValue={user?.displayName} {...register("name")} />

                                <Input className="mb-2 ps-2 w-100 " pl defaultValue={user?.email} {...register("email")} />

                                <Input className="mb-2  w-100 ps-2" placeholder="Phone Number" {...register("phone")} />

                                <Textarea className="mb-2  w-100 ps-2" placeholder="Give your address" {...register("address")} /> <br />
                                        
                                {errors.exampleRequired && <span>This field is required</span>}
                                
                                <input className="btn btn-outline-info mx-auto p-2 fs-6 shadow" type="submit" value="Order Confirm" />
                            </form>
                            
                        </Modal.Body>
                    </Modal>
                                 
                  
                    <Accordion style={{border:'1px solid #79593f'}} defaultActiveKey="0" className="my-5 ">
                        <Accordion.Item eventKey="0">
                                <Accordion.Header ><h5 style={{ color:'#79593f'}} > How long does it take?</h5></Accordion.Header>
                            <Accordion.Body>
                            <p>You will have your hoodies delivered to you within 14 days of approving the artwork. If you have a shorter deadline let us know, as we do ALL the print and embroidery in our own factory here in Harrow (even the companies with big flashy websites don’t do that!) we can normally adjust production to get your order through quickly.</p>
                                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                                <Accordion.Header ><h5 style={{ color:'#79593f'}} > What is included in the price?</h5></Accordion.Header>
                            <Accordion.Body>
                            <p>Our prices include everything ! The garment, all printing and embroidery, delivery, VAT… absolutely everything. There are never any extras. The price we quote is the price you pay.</p>
                                 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <h5>What if we miss someone off?</h5> </Accordion.Header>
                            <Accordion.Body>
                                    <p>
                                    That’s no problem, we understand how easily that can happen. We will run an extra one off for you at the same price as the main order.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> <h5>How can we pay?</h5> </Accordion.Header>
                            <Accordion.Body>
                                    <p>
                                    By credit or debit card, by cheque, or if the order is being placed directly by the School on 30 day account.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header> <h5>Do you send samples?</h5> </Accordion.Header>
                            <Accordion.Body>
                                    <p>
                                    Yes we can send out sample(s) on a sale or return basis. That way you can see the quality for yourself instead of taking our word for it.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>  
                    </div>
                </Row>
            </Container>














            

        </div>
    );
};

export default View;