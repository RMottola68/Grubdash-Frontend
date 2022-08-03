import { useState } from 'react';

function FoodItem({ meal }) {
    return(
        <div>
            <div>{meal.name}</div>
        </div>
    )
}

export default FoodItem;