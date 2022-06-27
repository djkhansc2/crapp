import React from "react";

const CoinCard = (props) => {
  const { element } = props;

  // Define an object that format numbers like USD dolars
  let dolar = Intl.NumberFormat("en", { style: "currency", currency: "USD" });

  return (
    <div className="card" style={{ width: "20rem", backgroundColor: "black" }}>
      <div className="card" style={{ backgroundColor: "gray" }}>
        <img src={element.image.large} className="card-img-top" />
        <hr />
        <div className="card-body">
          <h3 className="card-title">{element.name}</h3>
          <p className="card-text">
            USD: {dolar.format(element.market_data.current_price.usd)}
          </p>
          <p className="card-text">
            Total capital in USD:{" "}
            {dolar.format(element.market_data.market_cap.usd)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
