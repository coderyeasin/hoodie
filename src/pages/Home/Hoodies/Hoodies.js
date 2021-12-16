import React, { useEffect, useState } from 'react';


const Hoodies = () => {

    const [place, placed] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/hoodies')
            .then(res => res.json())
        .then(data => console.log(data))
    },[])

    
    return (
        <div className='text-light'>
            <h6>Best Hoodie style with two different shapes</h6>
        </div>
    );
};

export default Hoodies;