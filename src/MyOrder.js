import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import Restaurant from './Restaurant'

function MyOrder({ order, setOrder }) {
    // const [order, setOrder] = useState([]);
    function orders()  {
        fetch("http://localhost:9292/orders")
        .then(res => res.json())
        .then(data => {
            setOrder(data);
        })
    }
    useEffect((orders), []);
    // console.log(order);

    const renderOrders = order.map((orderItem) => {
        return(
            <OrderItem setOrder={setOrder} order={order} orderItem={orderItem} key={orderItem.id} />
        ) 
    })

return(
    <div style={{marginTop: "170px"}}>
        {renderOrders}
    </div>
)
}

export default MyOrder;