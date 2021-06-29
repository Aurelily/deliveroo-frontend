//import component
import Menu from "./Menu";

const Content = ({ data, addToCart }) => {
  return (
    <div className="meals">
      <div>
        {data.map((category, index) => {
          return (
            category.meals.length > 0 && (
              <div key={index}>
                <h2>{category.name}</h2>
                <Menu data={category.meals} addToCart={addToCart} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Content;
