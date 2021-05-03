const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="topBar">
        <img className="logo" src="/Deliveroo_logo.svg" alt="Deliveroo logo" />
      </div>
      <div className="container">
        <div className="restoTopInfos">
          <div className="col1-text">
            <h1>{data && data.restaurant.name}</h1>
            <p className="text-desc">{data && data.restaurant.description}</p>
          </div>
          <div className="pictureTop">
            <img
              src={data && data.restaurant.picture}
              alt={data && data.restaurant.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
