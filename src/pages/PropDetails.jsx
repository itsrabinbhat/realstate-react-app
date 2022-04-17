import React from "react";
import { useParams } from "react-router-dom";
import { useGetPropDetailsQuery } from "../services/api";
import { Carousel } from "react-responsive-carousel";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/PropDetails.css";

const PropDetails = () => {
  const { propID } = useParams();
  const { data, isFetching } = useGetPropDetailsQuery(propID);

  if (isFetching) return "Loading...";
  return (
    <div className="prop-detail">
      <Carousel className="carousel" infiniteLoop autoPlay emulateTouch>
        {data?.photos.map((photo, idx) => (
          <div className="img" key={idx}>
            <img src={photo?.url} alt="Carousel images" />
          </div>
        ))}
      </Carousel>
      <div className="main">
        {console.log(data)}
        <h3>{data?.title}</h3>
        <small>
          {data?.location[0]?.name},{data?.location[1]?.name}
        </small>
        <div className="prop-desc">
          <div className="left">
            <div className="highlights">
              <div className="highlight">
                <p className="title">Price</p>
                <p className="value">{millify(data?.price)}</p>
              </div>
              <div className="highlight">
                <p className="title">Area Coverd</p>
                <p className="value">{millify(data?.area)} m.squares</p>
              </div>
              <div className="highlight">
                <p className="title">State</p>
                <p className="value">{data?.state}</p>
              </div>
            </div>
            <p className="desc">{HTMLReactParser(data?.description)}</p>
          </div>
          <div className="right">
            <p className="title">Key Features</p>
            <ul>
              {data?.amenities?.map((item, idx) => (
                <li key={idx}>{item.amenities[0]?.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropDetails;
