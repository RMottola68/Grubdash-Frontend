import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import Menu from './Menu';



function RestaurantDetails() {

    
    const [restaurant, setRestaurant] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:9292/restaurants/${id}`)
        .then((r) => r.json())
        .then((restaurant) => {
          setRestaurant(restaurant);
          setIsLoaded(true)
        });
    }, [id]);
  
    if (!isLoaded) return <h2>Loading...</h2>

    const { name, city, rating, price  } = restaurant

    return(

      //decide what to put once we click the restaurant

      <div className="bg-light border border-1 border-warning justify-contents-center" style={{marginTop: "174px", marginRight: "220px", marginLeft: "220px", borderRadius: "30px"}}>
        <Container>
            <Row>
              <br></br>
              <h4 className="text-bold text-center mt-3"> {restaurant.name} </h4>
          <Menu restaurant={restaurant}/>
      </Row>
    </Container>
    </div>
    );
}

export default RestaurantDetails;

