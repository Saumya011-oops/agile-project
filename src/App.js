import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Alert from "./components/Alert";
import Cart from './components/Cart';
import Category from './components/Category';
import Contact from './components/Contact';
import Footer1 from "./components/Footer1";
import Front from "./components/Front";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from './components/Home';
import Invoice from "./components/Invoice";
import Login from "./components/Login";
import Myorders from "./components/Myorders";
import Navbar from './components/Navbar';
import Pay from './components/Pay';
import ProductDetails from "./components/ProductDetails";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";


function App() {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar cart={cart} />

      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} showAlert={showAlert} />} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} showAlert={showAlert} />} />
        <Route path="/pay" element={<ProtectedRoute><Pay cart={cart} setCart={setCart} showAlert={showAlert} /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invoice" element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/myorder" element={<ProtectedRoute><Myorders /></ProtectedRoute>} />
        <Route path="/myorders" element={<ProtectedRoute><Myorders /></ProtectedRoute>}/>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} showAlert={showAlert} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<Category cart={cart} setCart={setCart} wishlist={wishlist}setWishlist={setWishlist} showAlert={showAlert} />} />
      </Routes>
      <Footer1 />
    </Router>


  );
}

export default App;
