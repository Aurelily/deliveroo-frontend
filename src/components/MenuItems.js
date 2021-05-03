const MenuItems = ({ data, menuItems }) => {
  return (
    <div className="menu-items">
      <h2>{data && menuItems.name}</h2>
      <div className="menuItemsContainer">
        {data &&
          menuItems.meals.map((menuItem, index) => {
            return (
              <div className="menu-item">
                <div className="menu-item-card">
                  <div className="card-text">
                    <h3>{data && menuItem.title}</h3>
                    <p className="card-text-desc">
                      {data && menuItem.description}
                    </p>
                    <div className="card-infos">
                      <span>Price</span>
                      <span>Popular</span>
                    </div>
                  </div>

                  <div className="card-picture">
                    <img
                      src={data && menuItem.picture}
                      alt={data && menuItem.title}
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
