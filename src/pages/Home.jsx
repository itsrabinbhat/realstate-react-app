import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const Home = () => {
  const stats = [
    { title: "10+", desc: "Years of experience." },
    { title: "1000", desc: "Satisfied customers." },
    { title: "16", desc: "Awards gained." },
  ];
  return (
    <div className="home">
      <div className="main">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="content">
              <h1>A perfect home is must to settle down.</h1>
              <p>Let's find a perfect home for your family.</p>

              <div className="btn-container">
                <Link to="/buy-home">
                  <button className="btn-primary">
                    Buy A Home{" "}
                    <ArrowForwardIcon style={{ marginLeft: "8px" }} />
                  </button>
                </Link>
                <Link to="/rent-home">
                  <button className="btn-outlined">
                    Rent A Home{" "}
                    <ArrowForwardIcon style={{ marginLeft: "8px" }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="showcase-img"></div>
        </div>

        <div className="stats-container">
          <p className="heading">
            We have been helping you to find a best luxury home for past 10
            years.
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
        <div className="query-container">
          <div className="img-container">
            <div className="img">{/*image goes here...*/}</div>
          </div>
          <div className="desc-container">
            <p className="title">Why choose us?</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quasi eveniet! Autem adipisci aut ea maxime
              laudantium!
            </p>

            <p className="desc">
              Quasi autem natus tenetur beatae libero est repellat facere.
              Illum, eaque deleniti! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Excepturi cum sunt corporis aperiam sint!
              Deserunt similique aliquam iure! Totam temporibus tenetur
              cupiditate iste asperiores perferendis tempore vel quod quos
              laboriosam.
            </p>
            <button className="btn-primary">
              Learn More <ArrowForwardIcon style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>

        <div className="review-container">
          <div className="head">
            <div className="title">What customers say about us?</div>
            <button className="btn-primary">View More...</button>
          </div>
          <div className="cards">
            <div className="card">
              <FormatQuoteIcon
                sx={{ transform: "rotate(180deg)" }}
                className="quote"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                corporis repellat dicta culpa amet non.
              </p>
              <FormatQuoteIcon className="quote" />
              <p className="author">Iron man</p>
            </div>
            <div className="card">
              <FormatQuoteIcon
                sx={{ transform: "rotate(180deg)" }}
                className="quote"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                corporis repellat dicta culpa amet non.
              </p>
              <FormatQuoteIcon className="quote" />
              <p className="author">Thor</p>
            </div>
            <div className="card">
              <FormatQuoteIcon
                sx={{ transform: "rotate(180deg)" }}
                className="quote"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                corporis repellat dicta culpa amet non.
              </p>
              <FormatQuoteIcon className="quote" />
              <p className="author">The Hulk</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
