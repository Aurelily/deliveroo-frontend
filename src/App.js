import "./App.css";
//import package AXIOS
import axios from "axios";
//import des hooks useState et useEffect
import { useState, useEffect } from "react";
//Import des composants
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import Cart from "./components/Cart";
// //import library fontAwsome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cartTab, setCartTab] = useState([]);
  const newCartTab = [...cartTab];
  const [cartOn, setCartOn] = useState(false);
  const [counter, setCounter] = useState(0);

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
                    newCartTab={newCartTab}
                    setCartTab={setCartTab}
                    cartOn={cartOn}
                    setCartOn={setCartOn}
                  />
                );
              }
            })}
          </div>
          <Cart
            cartOn={cartOn}
            newCartTab={newCartTab}
            counter={counter}
            setCounter={setCounter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
