import "./App.css";
//import package AXIOS for requests
import axios from "axios";
//import  hooks useState et useEffect
import { useState, useEffect } from "react";

//Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Content from "./components/Content";

//For animated loading
import Loader from "react-loader-spinner";

//import icons fontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "./components/Modal";
library.add(faStar, faShoppingCart);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //Cart total initial
  let total = 0;

  // const url = "http://localhost:3200/";
  const url = "https://lily-deliveroo-backend.herokuapp.com/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //Function to add item to cart
  const addToCart = (item) => {
    const newCart = [...cart];
    // Is item exist in cart ?
    // Exist true if find() is verified
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist) {
      // Add a key quantity and increment
      exist.quantity++;
      setCart(newCart);
    } else {
      // If not exist, add the item in cart
      // Push in tab cart copy, the item + a key quantity with value 1
      item.quantity = 1;
      newCart.push(item);
      // can write : newCart.push({ ...item, quantity: 1 });
      // Update cart with copy
      setCart(newCart);
    }
  };

  //Function to substract item to cart
  const substractFromCart = (item) => {
    const newCart = [...cart];
    // Is item exist in cart ?
    // Exist true if find() is verified
    const exist = newCart.find((elem) => elem.id === item.id);

    if (item.quantity === 1) {
      // Substract item from cart
      const index = newCart.indexOf(exist);
      newCart.splice(index, 1);
    } else {
      // decrement quantity
      exist.quantity--;
    }
    // Update cart with copy
    setCart(newCart);
  };

  return isLoading ? (
    <div className="container-loading">
      <p>Chargement...</p>
      <Loader
        className="home-loader"
        type="Puff"
        color="#00ccbc"
        height={80}
        width={80}
      />
    </div>
  ) : (
    <div className="App">
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <Header data={data} />
      <Hero data={data} />
      <div className="content">
        <div className="container">
          <Content data={data.categories} addToCart={addToCart} />
          <div>
            <Cart
              cart={cart}
              total={total}
              substractFromCart={substractFromCart}
              addToCart={addToCart}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
