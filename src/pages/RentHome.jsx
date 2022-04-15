import { Link } from "react-router-dom";
import { useGetPropertiesQuery } from "../services/api";
import { FaBed, FaBath } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import millify from "millify";
import "../assets/css/RentHome.css";

const RentHome = () => {
  const { data, isFetching } = useGetPropertiesQuery("for-rent");
  console.log(data?.hits[0]);
  const imgUrl =
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";

  return (
    <div className="rent-home">
      <div className="header">
        <div className="img-container"></div>
        <div className="desc-container">
          <div className="desc">
            <p className="head">Rent a home</p>
            <p className="title">Rental homes & apartments for everyone.</p>
            <p className="sub">Explore apartments, villas, homes & more...</p>
          </div>
        </div>
      </div>
      <div className="main">
        {isFetching
          ? "Loading..."
          : data?.hits?.map((item) => (
              <Link to={`/rent-home/${item.id}`} key={item.id}>
                <div className="card">
                  <div className="card-img">
                    <img src={item.coverPhoto?.url || imgUrl} alt="img" />
                  </div>
                  <div className="content">
                    <div className="desc1">
                      <p className="price">
                        <MdVerified className="badge" />
                        AED {millify(item.price)}/Monthly
                      </p>
                      <div className="agency-logo">
                        <img src={item.agency?.logo?.url} alt="agency" />
                      </div>
                    </div>
                    <div className="icons">
                      {item.rooms} <FaBed className="icon" /> | {item.baths}
                      <FaBath className="icon" /> | {millify(item.area)} m
                      <sup>2</sup> <BsFillGridFill className="icon" />
                    </div>
                    <p className="title">{item.title}</p>
                    {/* <div className="desc2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  officiis temporibus ducimus consequatur. Earum, excepturi!
                </div> */}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default RentHome;
