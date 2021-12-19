import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import add from '../../../images/add.png'
import { Button, Input, Select, Textarea } from '../../../styles/Elements';

const AddHoodie = () => {
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://warm-falls-65459.herokuapp.com/hoodies', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data.insertedId) {
                alert('successfully added')
            }
        })
        
        reset()
}
     
    return (
        <Container>
        <Row className='align-items-center'>
            <div className="col-md-6 my-5">
                <h3 className='text-light'>Add a new Product</h3>
            
                <form className="bg-pink-50 space-y-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <Input className="w-100"
                            placeholder="Hoodie Title"
                            {...register("title", { required: true, maxLength: 100 })} />
                        
                        <Input placeholder="Hoodie Qualities"
                            className="w-100"
                            {...register("facilities", { required: true })} />
                        
                        <Input placeholder="Location"
                            className="w-100"
                            {...register("location", { required: true, maxLength: 20 })} />
                        
                        <Input placeholder="Image Link"
                            className="w-100"
                            {...register("image", { required: true })} /> <br />
                        
                        {/* <input placeholder="need implement" type="file"
                            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                            {...register("image", { required: true, maxLength: 20 })} />
                         */}
                        <Select  placeholder="Hoodie Type"
                            className="text-light w-100"
                            {...register("type")}>
                            
                            <option className="text-purple-500" value="Large event">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </Select>

                        <Input placeholder="Price"
                            className="w-100" type="tel" {...register("price")} />
                        
                        <Textarea placeholder="Description"
                            className="w-100 text-light"
                            {...register("description")} />


                        <Button placeholder=""
                            className="w-25 text-light"
                            type="submit" value="Add Hoodie" >Add Hoodie </Button>
                        
                    </form>
            </div>

            <div className="col-md-6">
                    <img className="img-fluid " src={add} alt="" />
            </div>
        </Row>
  </Container>
    );
};

export default AddHoodie;