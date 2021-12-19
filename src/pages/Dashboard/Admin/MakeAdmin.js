import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Input } from '../../../styles/Elements';
import Swal from 'sweetalert2'
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    // const [success, setSuccess] = useState(false)

    const { token } = useAuth()
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleAdmin = (e) => {
        // const user = {email}
        
        
        fetch('https://warm-falls-65459.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    // setSuccess(true)
                    console.log(data)
                    Swal.fire(
                        `Congratulations!`,
                        'Successfully Added Admin!',
                        'success'
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `This email is invalid`,
                    })
                }
            })
        
            e.preventDefault()
    }
    return (
        <div>
            <h3>Make your Favourite Admin</h3>
            
            {/* {success && Swal.fire(
                    `Congratulations!`,
                    'Successfully Added Admin!',
                    'success'
            )} */}

          
            <div>
            <form onSubmit={handleAdmin}>
                
                <Input className='w-50 my-3' onBlur={handleEmail} type="email" placeholder='Email' /> <br />
                <Button type="submit" className='btn btn-outline-info'>MakeAdmin </Button>
                </form>
           </div>
        </div>
    );
};

export default MakeAdmin;