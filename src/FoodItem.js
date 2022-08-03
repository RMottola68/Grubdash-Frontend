import { useState } from 'react';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';

function FoodItem({ meal }) {

function handleAdd () {
   //callbaack
//    const mealObj
// + post request >>> mealObj to Order 
//
//flow 
//a click adds item to order object

}


    return(
        <div>
            <div style={{fontSize: "25px"}}>{meal.name}</div>
            <Button onClick={handleAdd}> Add to My Order</Button>
        </div>
    )
}

export default FoodItem;