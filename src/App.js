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

function App() {
  const [order, setOrder] = useState([]);
  return (
    <div >
      <Navigation />
      <Routes >
        {/* search elements in react router */}
        <Route path="myorder" element={<MyOrder setOrder={setOrder} order={order} />}  />
        <Route path="restaurants" element={<RestaurantContainer className="isActive"/>} />
      </Routes>
    </div>
  );
}

export default App;
