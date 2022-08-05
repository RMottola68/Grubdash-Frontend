import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';


function OurStory( {onAddRest}) {
const [form, setForm] = useState({name: "", rating: "", city: "", price: ""})

function handleChange (e) {
    setForm((prevForm) => {
        return {
            ...prevForm, [e.target.name]: e.target.value
        }
    })
}
console.log(form.price)
function handleSubmit(e){
    e.preventDefault();
    fetch ("http://localhost:9292/restaurants", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({...form}),
    })
    .then (res => res.json())
    .then((newRest) => {onAddRest(newRest); 
            setForm ({
                name: "",
                city: "",
                rating: "",
                price: "",
            });
            });
        
};
const team = "https://www.8w8.com/wp-content/uploads/2020/06/video_hbo.jpg"

    return (
        <div  className="bg-light p-3 border border-1 border-warning" style={{margin: "174px", borderRadius: "30px"}}>
            
            <h4>GrubDash is your new favorite mobile local social app disrupting the food industry. 
              In our ever-expanding breadth, GrubDash is continually unlocking key restaurant partners while earning locked in and loyal consumer allies. 
              We pride ourselves in wedding inspired makers with forward-tasters as we dismantle and rebuild the food space. 
              If you think your buds are both accessible and discerning, and we aren't already servicing your go to eatery please, give us your data:
            </h4>

            <img src={team} alt="team photo" />


        <Form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
        }}>
      <Form.Group  className="mb-0" controlId="formBasicName" >
        <Form.Label> Restaurant name</Form.Label>
        <Form.Control name="name" type="string" placeholder="Enter Restaurant name" onChange={handleChange} value={form.name}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicLocation" >
        <Form.Label> Restaurant location </Form.Label>
        <Form.Control name="city" type="string" placeholder="Enter Restaurant location" onChange={handleChange} value={form.city}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group  className="mb-0" controlId="formBasicRating" >
      <Form.Select name="rating" className="mb-4" aria-label="Default select example" onChange={handleChange} value={form.rating}>
      <option>Restaurant Rating</option>
      <option value="★">★</option>
      <option value="★★">★★</option>
      <option value="★★★">★★★</option>
      <option value="★★★★">★★★★</option>
      <option value="★★★★★">★★★★★</option>
    </Form.Select>
    </Form.Group>
    <Form.Group  className="mb-0" controlId="formBasicPrice" >
    <Form.Select name="price" className="mb-4" aria-label="Default select example" onChange={handleChange} value={form.price}>
      <option>Restaurant Price</option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
      <option value="$$$$">$$$$</option>
      <option value="$$$$$">$$$$$</option>
    </Form.Select>
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default OurStory;