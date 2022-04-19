import React from "react";
import { useParams } from "react-router-dom";
import { useGetPropDetailsQuery } from "../services/api";
import { Carousel } from "react-responsive-carousel";
import { FaMobile, FaPhone, FaWhatsappSquare } from "react-icons/fa";
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
                <p className="title">Price(AED)</p>
                <p className="value">
                  {millify(data?.price)}
                  {data?.purpose == "for-rent" && "/Monthly"}
                </p>
              </div>
              <div className="highlight">
                <p className="title">Product Type</p>
                <p className="value">{data?.product}</p>
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

        <h3 className="seller-info-title">Seller</h3>
        <div className="seller-info">
          <div className="left">
            <p className="title">{data?.agency?.name}</p>
            <img src={data?.agency?.logo?.url} alt="agency-logo" />
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              saepe soluta ab non vero molestias quasi voluptatum dolorem iure
              quas deserunt nulla, rem molestiae sed. Nemo, facilis recusandae,
              aliquid consequatur cumque officia veniam repellat ea expedita
              quasi laboriosam soluta quod obcaecati eaque adipisci repellendus
              earum? Itaque nemo ipsa dolorem earum.
            </p>
          </div>
          <div className="right">
            <p className="title">Contact Info</p>
            <p className="name">{data?.contactName}</p>
            <div className="contact">
              <FaMobile className="icon" />
              {data?.phoneNumber?.mobile
                ? data?.phoneNumber?.mobile
                : "Not Availabe."}
            </div>
            <div className="contact">
              <FaPhone className="icon" />
              {data?.phoneNumber?.phone
                ? data?.phoneNumber?.phone
                : "Not Availabe."}
            </div>
            <div className="contact">
              <FaWhatsappSquare className="icon" />
              {data?.phoneNumber?.whatsapp
                ? data?.phoneNumber?.whatsapp
                : "Not Availabe."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropDetails;
