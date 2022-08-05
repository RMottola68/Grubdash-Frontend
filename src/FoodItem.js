import { Button } from 'react-bootstrap';

function FoodItem({ meal }) {
    function handleAdd () {
        const foodObj = {
            name: meal.name,
            price: meal.price,
            quantity: 1
        }
        
        fetch("http://localhost:9292/orders",{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(foodObj)
        })
        .then(res => res.json())
        .then(mealData => {
            console.log(mealData)
            // setOrder((prevState) => prevState = [...order, foodObj])
            
        })
        
    }


    return(
        <div>
            <div style={{fontSize: "25px"}}>{meal.name}</div>
            <Button onClick={() => handleAdd()}> Add to My Order</Button>
        </div>
    )
}

export default FoodItem;