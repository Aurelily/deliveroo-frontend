//import font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({
  cart,
  total,
  substractFromCart,
  addToCart,
  showModal,
  setShowModal,
}) => {
  //function to open modal
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="cart">
      <div className="cartCard">
        {cart.length > 0 ? (
          <div className="cart-valid">
            <button className=" btValidDisable btValid" onClick={handleClick}>
              <FontAwesomeIcon
                icon="shopping-cart"
                style={{ marginRight: "10px" }}
              />
              Valider mon panier
            </button>
            <div className="cart-item-list">
              {cart.map((item, index) => {
                total += item.quantity * item.price;
                return (
                  <div className="cart-line">
                    <div className="cart-counter" key={index}>
                      <button
                        className="btCounter"
                        onClick={() => substractFromCart(item)}
                      >
                        -
                      </button>
                      <div className="item-quantity">{item.quantity}</div>
                      <button
                        className="btCounter"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item-name">{item.title}</span>
                    <span className="cart-amount">{item.price} €</span>
                  </div>
                );
              })}
            </div>
            <div className="cart-results">
              <span>Sous-total : {(total - 2.5).toFixed(2)} €</span>
              <span>Frais de livraison : 2,50 €</span>
            </div>
            <div className="cart-results">
              <h2>Total : {total.toFixed(2)} €</h2>
            </div>
          </div>
        ) : (
          <>
            <button className="btValidDisable">
              <FontAwesomeIcon
                icon="shopping-cart"
                style={{ marginRight: "10px" }}
              />
              Valider mon panier
            </button>
            <div className="cart-empty">Votre panier est vide</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
