import React from "react";
import "../assets/css/BuyHome.css";
import { useGetPropertiesQuery } from "../services/api";
import { Link } from "react-router-dom";

const BuyHome = () => {
  // const { data, isFetching } = useGetPropertiesQuery("for-sale");
  const imgUrl =
    "https://images.pexels.com/photos/1034464/pexels-photo-1034464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
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

      <div className="main">
        <Link to="/buy-home/:propID">
          <div className="card">
            <div className="card-img">
              <img src={imgUrl} alt="img" />
            </div>
            <div className="content">
              <p className="title">Duck the ducking duck in...</p>
              <div className="desc1">
                <p className="price">USD 100K</p>
                <div className="agency-logo">Duck</div>
              </div>
              <div className="icons">5 beds | 3 tubs</div>
              <div className="desc2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                officiis temporibus ducimus consequatur. Earum, excepturi!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/buy-home/:propID">
          <div className="card">
            <div className="card-img">
              <img src={imgUrl} alt="img" />
            </div>
            <div className="content">
              <p className="title">Duck the ducking duck in...</p>
              <div className="desc1">
                <p className="price">USD 100K</p>
                <div className="agency-logo">Duck</div>
              </div>
              <div className="icons">5 beds | 3 tubs</div>
              <div className="desc2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                officiis temporibus ducimus consequatur. Earum, excepturi!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/buy-home/:propID">
          <div className="card">
            <div className="card-img">
              <img src={imgUrl} alt="img" />
            </div>
            <div className="content">
              <p className="title">Duck the ducking duck in...</p>
              <div className="desc1">
                <p className="price">USD 100K</p>
                <div className="agency-logo">Duck</div>
              </div>
              <div className="icons">5 beds | 3 tubs</div>
              <div className="desc2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                officiis temporibus ducimus consequatur. Earum, excepturi!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/buy-home/:propID">
          <div className="card">
            <div className="card-img">
              <img src={imgUrl} alt="img" />
            </div>
            <div className="content">
              <p className="title">Duck the ducking duck in...</p>
              <div className="desc1">
                <p className="price">USD 100K</p>
                <div className="agency-logo">Duck</div>
              </div>
              <div className="icons">5 beds | 3 tubs</div>
              <div className="desc2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                officiis temporibus ducimus consequatur. Earum, excepturi!
              </div>
            </div>
          </div>
        </Link>
        <Link to="/buy-home/:propID">
          <div className="card">
            <div className="card-img">
              <img src={imgUrl} alt="img" />
            </div>
            <div className="content">
              <p className="title">Duck the ducking duck in...</p>
              <div className="desc1">
                <p className="price">USD 100K</p>
                <div className="agency-logo">Duck</div>
              </div>
              <div className="icons">5 beds | 3 tubs</div>
              <div className="desc2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                officiis temporibus ducimus consequatur. Earum, excepturi!
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BuyHome;
