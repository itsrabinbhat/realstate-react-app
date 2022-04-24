import aboutImg from "../assets/images/about.svg";
import "../assets/css/About.css";
import { useTitle } from "../hooks/useTitle";

const About = () => {
  useTitle("About us | Realtor");
  return (
    <div className="about-us">
      <div className="about-img">
        <img src={aboutImg} />
      </div>
      <div className="desc">
        <h2 className="title">About us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          eos non, praesentium ad ullam accusantium alias eligendi omnis quidem
          et officia minima laboriosam. Sunt eius quo consequuntur voluptatum
          aspernatur est.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
          consectetur impedit. Quasi animi, dicta corrupti eos dolores aliquam
          tempora mollitia deserunt vel praesentium unde neque quis porro,
          cumque alias! Mollitia in modi, ducimus cumque odio accusamus!
          Repudiandae quisquam eum nisi quidem tenetur! Ab odio sapiente officia
          natus quam? Accusantium, voluptatum.
        </p>
      </div>
    </div>
  );
};

export default About;
