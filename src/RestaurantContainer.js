import { useState, useEffect } from 'react';
import Restaurant from './Restaurant'

function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const [restaurantFilter, setRestaurantFilter] = ('');

    function getRestaurants(){
        fetch(`http://localhost:3001/Restaurants`)
        .then((res)=>res.json())
        .then((restaurantData)=> setRestaurants(restaurantData.results))
    }
    
    useEffect(getRestaurants,[])

    return(
        <div>
            <Restaurant />
        </div>
    )
}

export default Restaurants;