// ★★★★★ use this later for reviewsimport { useState } from 'react';
import {NavLink} from 'react-router-dom';


function Restaurant({ restaurant }) {
    
    return(
        <div className="bg-light p-3 mt-3  border-1 border border-warning" style={{borderRadius: "30px"}}>
            
            <div>
            <NavLink to={`/restaurants/${restaurant.id}`}>
                <div className="" style={{fontSize: "30px", fontWeight: "bold" }} >{restaurant.name}</div>
            </NavLink>
                
                <div style={{fontSize: "25px"}}>{restaurant.city}</div>
                <div style={{fontSize: "30px"}}>Rating: {restaurant.rating}</div>
                <div style={{fontSize: "30px"}}>Price: {restaurant.price}</div>
                <br></br>
                
            </div>
        </div>
    )
}

export default Restaurant;