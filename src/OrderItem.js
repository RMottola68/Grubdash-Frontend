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

    
    // <Button onClick={() => handleDelete()}>Remove Item</Button>

    return(
        <div>
            <div  className="m-3" style={{fontSize: "25px"}}>{orderItem.name} X {orderItem.quantity}<Button className="mx-3" variant='danger' onClick={() => handleDelete()} >Remove Item</Button></div>
            
        </div>
    )
}

export default OrderItem;