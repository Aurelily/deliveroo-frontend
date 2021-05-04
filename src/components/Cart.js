import CartItem from "./CartItem";

const Cart = ({ cartOn, newCartTab, counter, setCounter, itemTitle }) => {
  return (
    <div className="cart">
      <div className="cartCard">
        <button
          className={cartOn ? " btValidDisable btValid" : "btValidDisable"}
        >
          Valider mon panier
        </button>
        {cartOn ? (
          <div className="cart-valid">
            <div className="cart-item-list">
              {newCartTab.map((cartItem, index) => {
                return (
                  <CartItem
                    key={index}
                    counter={counter}
                    setCounter={setCounter}
                    itemTitle={itemTitle}
                  />
                );
              })}
            </div>

            <div className="cart-results">
              <div>
                <span>Sous-total</span>
                <span>25,00€</span>
              </div>
              <div>
                <span>Frais de livraison</span>
                <span>2,50€</span>
              </div>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>27,50€</span>
            </div>
          </div>
        ) : (
          <div className="cart-empty">Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};
export default Cart;
