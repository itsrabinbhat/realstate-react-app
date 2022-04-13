import React from "react";
import "../assets/css/BuyHome.css";
import { useGetPropertiesQuery } from "../services/api";

const BuyHome = () => {
  // const { data, isFetching } = useGetPropertiesQuery("for-sale");
  return (
    <div className="buy-home">
      <div className="header">
        <div className="img-container"></div>
        <div className="desc-container">
          <div className="desc">
            <p className="head">Buy a home</p>
            <p className="title">Find, buy & own your dream home.</p>
            <p className="sub">Explore apartments, villas, homes & more...</p>
          </div>
        </div>
      </div>

      <div className="main"></div>
    </div>
  );
};

export default BuyHome;
