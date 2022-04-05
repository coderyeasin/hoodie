import React, { useEffect, useState } from 'react';

const useHoddies = () => {
       const [place, setPlaced] = useState([]);


       useEffect(() => {
         fetch("https://warm-falls-65459.herokuapp.com/hoodies")
           .then((res) => res.json())
           .then((data) => {
             const hoodie = data.filter(
               (e) => e.title && e.facilities && e.description
             );
             setPlaced(hoodie.slice(7, 13));
           });
       }, []);
    
    return {
      place
    };
};

export default useHoddies;