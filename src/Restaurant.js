// ★★★★★ use this later for reviewsimport { useState } from 'react';
import Menu from './Menu';
function Restaurant({ restaurant }) {
    
    return(
        <div className="bg-light p-3 mt-3 m" style={{borderRadius: "30px"}}>
            <div>
                <div className="" style={{fontSize: "30px", fontWeight: "bold" }} >{restaurant.name}</div>
                <div style={{fontSize: "25px"}}>{restaurant.city}</div>
                <div style={{fontSize: "30px"}}>Rating: {restaurant.rating}</div>
                <div style={{fontSize: "30px"}}>Price: {restaurant.price}</div>
                <Menu restaurant={restaurant}/>
                <br></br>
            </div>
        </div>
    )
}

export default Restaurant;