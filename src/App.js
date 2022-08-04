import{ useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import Navigation from "./Nav";
import RestaurantContainer from "./RestaurantContainer"
import MyOrder from "./MyOrder"
import OurStory from './OurStory';


function App() {
  const [restaurants, setRestaurants] = useState([]);
  function onAddRest(newRest){
    return setRestaurants([...restaurants, newRest]);
  };

  const [order, setOrder] = useState([]);
  return (
    <div >
      <Navigation />
      <Routes >
        {/* search elements in react router */}
        <Route path="ourstory" element={<OurStory onAddRest={onAddRest} />} />
        <Route path="myorder" element={<MyOrder setOrder={setOrder} order={order} />}  />
        <Route path="restaurants" element={<RestaurantContainer restaurants={restaurants} setRestaurants={setRestaurants} className="isActive"/>} />
      </Routes>
    </div>
  );
}

export default App;
