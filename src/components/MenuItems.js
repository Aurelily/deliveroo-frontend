import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "./CartItem";

const MenuItems = ({
  data,
  menuItems,
  newCartTab,
  setCartTab,
  cartOn,
  setCartOn,
}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="menu-items">
      <h2>{data && menuItems.name}</h2>
      <div className="meals">
        {menuItems.meals.map((menuItem) => {
          return (
            <div
              key={menuItem.id}
              className="menu-item"
              onClick={() => {
                cartOn === false && setCartOn(true);
                console.log(cartOn);
                newCartTab.push(
                  <CartItem
                    id={menuItem.id}
                    counter={counter}
                    setCounter={counter}
                  />
                );
                setCounter(counter);
                setCartTab(newCartTab);
              }}
            >
              <div className="menu-item-card">
                <div className="card-text">
                  <h3>{menuItem.title}</h3>
                  <p className="card-text-desc">{menuItem.description}</p>
                  <div className="card-infos">
                    <span className="price">{`${menuItem.price} €`}</span>
                    <span className="popular">
                      {menuItem.popular && "Popular"}
                    </span>
                  </div>
                </div>
                <div className="card-picture">
                  <img
                    src={menuItem.picture}
                    onError={(e) => {
                      e.src = "/nopict.jpg";
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuItems;
