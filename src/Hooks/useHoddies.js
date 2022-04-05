import React, { useEffect, useState } from 'react';

const useHoddies = () => {
       const [place, setPlaced] = useState([]);
    const [hoodie, setHoodie] = useState([])
    const [categories, setCategories] = useState([])

       useEffect(() => {
         fetch("https://warm-falls-65459.herokuapp.com/hoodies")
           .then((res) => res.json())
           .then((data) => {
             const hoodie = data
               .filter((e) => e.title && e.facilities && e.description)
               .reverse();
               setPlaced(hoodie.slice(0, 6));
               setHoodie(hoodie.slice(0, 3));
               setCategories(hoodie.slice(0, 3));
           });
       }, []);
    
    return {
      place,
      hoodie,
      categories,
    };
};

export default useHoddies;