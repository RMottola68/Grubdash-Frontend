// ★★★★★ use this later for reviewsimport { useState } from 'react';
import Menu from './Menu';
function Restaurant({ restaurant }) {
    
    return(
        <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.city}</div>
            <div>{restaurant.rating}</div>
            <div>{restaurant.price}</div>
            <Menu restaurant={restaurant}/>
            <br></br>
        </div>
    )
}

export default Restaurant;