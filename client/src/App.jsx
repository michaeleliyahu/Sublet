import Home from "./pages/Home"
import Product from "./pages/Product";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

const App = () => {
  // const user = true;
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* {user ?
        (<Navigate replace to={"/"}/>) 
        : 
        (<Login/>)
      }
      /> */}
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
  );
};

export default App;