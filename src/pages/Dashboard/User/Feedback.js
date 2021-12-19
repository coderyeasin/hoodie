import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { Input, Textarea } from '../../../styles/Elements';

const Feedback = () => {

    const {user} = useAuth()

    const { register, reset, handleSubmit } = useForm();

    const onSubmit = data => {
        // data = user.displayName

        fetch('https://warm-falls-65459.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            if (data.insertedId) {
                alert('successfully added')
            }
        })
        
        reset()
}
     
    return (
        <div>
            <h3>User Feedback</h3>
            <form className="w-50 mx-auto mb-5" onSubmit={handleSubmit(onSubmit)}>
            <Textarea placeholder="Description"
                            className="w-100 text-light"
                    {...register("feedbacks")} />
                
                <Input className="w-100 my-3"
                            placeholder="Give your star out of 5"
                            {...register("rating", { required: true, maxLength: 100 })} />
                        
                <Input className="w-100 my-3 visually-hidden"
                            value={user?.displayName}
                            {...register("name", { required: true, maxLength: 100 })} />
                        

                        <Button placeholder=""
                            className="w-25 text-light"
                            type="submit" value="Add Hoodie" style={{ background: 'linear-gradient(45deg, #17262c, #0a1c24)'}}> Review US </Button>
                        
            </form>
        </div>
    );
};

export default Feedback;