import "./App.css";
//import package AXIOS
import axios from "axios";
//import des hooks useState et useEffect
import { useState, useEffect } from "react";
//Import des composants
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import CartItem from "./components/CartItem";
// //import library fontAwsome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cartOn, setCartOn] = useState(false);
  const [cartTab, setCartTab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lily-deliveroo-backend.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header data={data} />
      <div className="content">
        <div className="container">
          <div className="menus">
            {data.categories.map((menuItems, index) => {
              if (menuItems.meals.length !== 0) {
                return (
                  <MenuItems
                    key={index}
                    data={data}
                    menuItems={menuItems}
                    cartOn={cartOn}
                    setCartOn={setCartOn}
                  />
                );
              }
            })}
          </div>

          <div className="cart">
            {console.log(cartOn)}
            <div className="cartCard">
              <button
                className={
                  cartOn ? " btValidDisable btValid" : "btValidDisable"
                }
              >
                Valider mon panier
              </button>
              {cartOn ? (
                <div className="cart-valid">
                  {cartTab.map((cartItem, index) => {
                    cartTab.push(<CartItem key={index} />);
                    setCartTab(cartTab);
                  })}
                  <div className="cart-results">Cart results</div>
                  <div className="cart-total">Cart total</div>
                </div>
              ) : (
                <div className="cart-empty">Votre panier est vide</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
