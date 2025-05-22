import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 z-10"
      aria-label="Previous"
    >
      &#8592;
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 z-10"
      aria-label="Next"
    >
      &#8594;
    </button>
  );
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill relative" id="skills">
      <div className="container relative">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn relative">
              <h2 className="mb-6">Skills</h2>
              <p className="mb-8">
                I build responsive websites with clean code and modern designs.
                <br />
                My focus is on performance, accessibility, and user experience.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                containerClass="relative"
                itemClass="px-3"
                partialVisible={true}
                partialVisibilityGutter={20}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
              >


                <div className="item">
                  <img src={meter1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tailwind CSS" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Firebase" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Figma" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Git & GitHub" />
                  <h5>Git & GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Firebase" />
                  <h5>Node.Js (Basic)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="HTML" />
                  <h5>MongoDB (Basic)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Git & GitHub" />
                  <h5> Photoshop</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
