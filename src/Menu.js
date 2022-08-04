import { useState, useEffect } from 'react';
import FoodItem from './FoodItem'
function Menu({ restaurant }) {

    const [meals, setMeals] = useState([]);
    const [menu, setMenu] = useState([]);

    function getMenu(){
        fetch(`http://localhost:9292/restaurants/${restaurant.id}/menu`)
        .then((res)=>res.json())
        .then((menuData) => setMenu(menuData))
    }

    function getMeals(){
        fetch(`http://localhost:9292/restaurants/${restaurant.id}/meals`)
        .then((res)=>res.json())
        .then((mealData) => setMeals(mealData))
    }
    
    useEffect(getMenu,[])
    useEffect(getMeals,[])
    console.log(meals)

    const renderMeals = meals.map((meal) => {
        // if(meal.length < 1)
        // window.confirm('')
        return(
            <FoodItem meal={meal} key={meal.id}/>
        
        )
    })
    return(
        <div>
            {meals.length > 0 ? renderMeals : "There is no menu"}
        </div>
    )
}

export default Menu;