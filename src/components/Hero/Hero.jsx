import "./Hero.css";
import { profile1 } from "../../assets/images/";
import Points from "./Points/Points";
import Partners from "./Partners/Partners";

const Hero = () => {
  return (
    <section id="home">
      {/* <div className="stroke__text intro__text">HELLO</div> */}
      <div className="container full__height">
        <div className="info__container">
          <div className="user__profile">
            <div className="photo__container primary__effect">
              <img src={profile1} alt="" />
            </div>
          </div>

          <div className="details__container">
            <h3>
              Hello there! Im{" "}
              <span className="color__primary">Marvelous Osondu</span>
            </h3>

            <h1 className="title">
              <span className="text-gradient">Fullstack Developer</span>
            </h1>
            <h3>Working from Nigeria</h3>
            <p className="text__muted description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolore. Atque laudantium ipsum dicta incidunt.
            </p>
            <Points />
          </div>
        </div>

        <Partners />
      </div>
    </section>
  );
};

export default Hero;
