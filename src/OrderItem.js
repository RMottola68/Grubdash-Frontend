import { useState } from 'react';
import { Button } from 'react-bootstrap';

function OrderItem({ order, setOrder, orderItem }) {
   
    let orderID = orderItem.id
    function handleDelete (orderItem) {
        const newOrder = [...order]
        const filteredOrders = newOrder.filter((thisOrder) => {
            return thisOrder.id !== orderID
        })

        fetch(`http://localhost:9292/orders/${orderID}`,{
            method:'DELETE',
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(orderData => {
            console.log(filteredOrders)
            setOrder(prevState => prevState = [...filteredOrders])
            
        })
    }

    // patch add counter fetch
    const [counter, setCounter] = useState(1)
        function handleIncrease() {
                console.log("upper")
                setCounter(counter => counter + 1)}
        function handleDecrease() {
                console.log("downer")
                setCounter(counter => counter -1)
            };
        
        
            const foodObj = {
                name: orderItem.name,
                price: orderItem.price,
                quantity: counter
            }


        // patch for increase
        fetch(`http://localhost:9292/orders/${orderItem.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(foodObj),
          })
            .then((r) => r.json())
            .then((updatedItem) => console.log(updatedItem));

        // patch for decrease

    // if count goes to 0, delete item on backend, but how does it know what the item is if the click is targeting the counter not the item 
    

    return(
        <div>
            <div  className="m-3" style={{fontSize: "25px"}}>{orderItem.name}  
            <Button className="mx-3" variant='danger' onClick={handleIncrease}> + {null} </Button>
            {counter}
            <Button className="mx-3" variant='danger' onClick={handleDecrease}> - </Button>
            
            <Button className="mx-3" variant='danger' onClick={() => handleDelete()}> Remove Item </Button></div>
            
        </div>
    )
}

export default OrderItem;