import { useState } from 'react';

function FoodItem({ meal }) {
    return(
        <div>
            <div style={{fontSize: "25px"}}>{meal.name}</div>
        </div>
    )
}

export default FoodItem;