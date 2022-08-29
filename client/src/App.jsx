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
  Navigate,
  // Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import AddProduct from "./pages/AddProduct";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path="/AddProdect" element={<AddProduct/>}/>
      <Route path="/login" element=
      {user ?
        (<Navigate replace to={"/"}/>) 
        : 
        (<Login/>)
      }
      />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
  );
};

export default App;