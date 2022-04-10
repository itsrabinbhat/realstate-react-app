import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../assets/css/Home.css";

const Home = () => {
  const stats = [
    { title: "10+", desc: "Years of experience." },
    { title: "1000", desc: "Satisfied customers." },
    { title: "16", desc: "Awards gained." },
  ];
  return (
    <div className="main">
      <div className="showcase-container">
        <div className="showcase-content">
          <div className="content">
            <h1>A perfect home is must to settle down.</h1>
            <p>Let's find a perfect home for your family.</p>

            <div>
              <button className="btn-primary">
                Buy A Home <ArrowForwardIcon style={{ marginLeft: "8px" }} />
              </button>
              <button className="btn-outlined">
                Rent A Home <ArrowForwardIcon style={{ marginLeft: "8px" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="showcase-img"></div>
      </div>

      <div className="stats-container">
        <p className="heading">
          We have been helping you to find a best luxury home for past 10 years.
        </p>
        <div className="stats">
          {stats?.map((stat, idx) => (
            <div key={idx} className="stat">
              <p className="title">{stat.title}</p>
              <p className="desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="query-container"></div>
    </div>
  );
};

export default Home;
