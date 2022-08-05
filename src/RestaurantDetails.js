import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';


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
        <div className="card">
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{city}</p>
            <div className="card__detail">
            <div className='desc'>
              <h4>{rating}</h4>
            
            </div>
              <p>{price}</p>
              <p>
                {city}
              </p>
              <p>{price}</p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
    </div>
    );
}

export default RestaurantDetails;

