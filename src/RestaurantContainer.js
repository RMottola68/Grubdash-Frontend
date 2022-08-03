import { useState, useEffect } from 'react';
import Restaurant from './Restaurant'

function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const [restaurantFilter, setRestaurantFilter] = ('');

    function getRestaurants(){
        fetch(`http://localhost:9292/restaurants`)
        .then((res)=>res.json())
        .then((restaurantData) => setRestaurants(restaurantData))
    }
    
    useEffect(getRestaurants,[])
    // console.log(restaurants)

    const renderRestaurants = restaurants.map((restaurant) => {
        return(
            <Restaurant key={restaurant.id} restaurant={restaurant} />
        )
    }) 
    return(
        <div>
            {renderRestaurants}
        </div>
    )
}

export default Restaurants;