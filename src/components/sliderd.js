import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,

} from "@fortawesome/free-solid-svg-icons";
import daniela1 from "../../static/img/daniela1.png";
import daniela2 from "../../static/img/daniela2.png";
import daniela3 from "../../static/img/daniela3.png";
import daniela4 from "../../static/img/daniela4.png";




function NextArrow(props) {
  const {  onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowRight}
                     className="slick-arrow slick-next"
                     onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowLeft}
                     className="slick-arrow is-primary slick-prev"
                     onClick={onClick}/>
  );
}


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="section container has-text-centered">
      <div>
        <Slider {...settings}>
          <div className="has-text-centered">
          <img src={daniela1} className="sliderimage" />
          </div>
          <div>
            <img src={daniela2} className="sliderimage" />
          </div>
          <div>
            <img src={daniela3} className="sliderimage" />
          </div>
          <div>
            <img src={daniela4} className="sliderimage" />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

