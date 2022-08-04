import { useState, useEffect } from 'react';
import Restaurant from './Restaurant'

function MyOrder() {
    const [order, setOrder] = useState([]);
    function orders()  {
        fetch("http://localhost:9292/orders")
        .then(res => res.json())
        .then(data => {
            setOrder(data);
        })
    }
    useEffect((orders), []);
    console.log(order);

    const renderOrders = order.map((order) => {
        return(
            // <Restaurant className="xs-mt-5 p-5" restaurant={restaurant}  />
        ) 
    })

return(
    <div>
        
    </div>
)
}

export default MyOrder;