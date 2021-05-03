import "./App.css";
//import package AXIOS
import axios from "axios";
//import des hooks useState et useEffect
import { useState, useEffect } from "react";
//Import des composants
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lily-deliveroo-backend.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={data} />
      <div className="content">
        <div className="container">
          <div className="menus">
            {data &&
              data.categories.map((menuItems, index) => {
                if (menuItems.meals.length !== 0) {
                  return (
                    <MenuItems key={index} data={data} menuItems={menuItems} />
                  );
                }
              })}
          </div>

          <div className="cart">Cart</div>
        </div>
      </div>
    </div>
  );
}

export default App;
