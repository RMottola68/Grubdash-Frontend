// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import Restaurant from './Restaurant'
import { Container, Row } from 'react-bootstrap';

function MyOrder({ order, setOrder }) {
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
            <OrderItem className="m-5" setOrder={setOrder} order={order} orderItem={orderItem} key={orderItem.id} />
        ) 
        
    })

return(
    <div className="bg-light border border-1 border-warning justify-contents-center" style={{marginTop: "174px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px"}}>
        <Container>
            <Row>
                {renderOrders}
            </Row>
        </Container>
        
    </div>
)
}

export default MyOrder;

// <Button className="mx-3" variant="danger" onClick={() => handleCheckout()}>
// {" "}
// Checkout {" "}
// </Button>
// </div>

// const [orderTotal, setOrderTotal] = useState([])
//   function handleCheckout() {
//     // works great for 1 item
//     // for new item, needs a new slice of state touching each items in order and + and - as well
//     // maybe for demo, we do the dance and only check out w 1 item say, 2 each
//     alert(`$${(orderItem.price)*counter} will be charged to your account. GrubHub out!`)
//   }