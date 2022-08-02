import { useState } from 'react';
import FoodItem from './FoodItem'
function Menu() {
    return(
        <div>
            <FoodItem>Taco</ FoodItem>
            <FoodItem>Birria</ FoodItem>
            <FoodItem>Empenadas</ FoodItem>
            <FoodItem>Enchilada</ FoodItem>
        </div>
    )
}

export default Menu;