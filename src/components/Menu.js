//import font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ data, addToCart }) => {
  return (
    <div className="meals">
      {data.map((item) => {
        return (
          <div
            className="menu-item"
            key={item.id}
            onClick={() => {
              addToCart(item);
            }}
          >
            <div className="menu-item-card">
              <div className="card-text">
                <h4>{item.title}</h4>
                <p className="card-text-desc">{item.description}</p>
                <div className="card-infos">
                  <span className="price">{`${item.price} €`}</span>
                  {item.popular && (
                    <span className="popular">
                      <FontAwesomeIcon
                        icon="star"
                        style={{ marginRight: "5px" }}
                      />
                      Populaire
                    </span>
                  )}
                </div>
              </div>
              <div className="card-picture">
                {item.picture ? (
                  <img
                    src={item.picture}
                    onError={(e) => {
                      e.src = "/nopict.jpg";
                    }}
                    alt={item.title}
                  />
                ) : (
                  <img src="/nopict.jpg" alt={item.title} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
