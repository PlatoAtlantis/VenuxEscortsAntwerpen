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
import andrea1 from "../../static/img/andrea1.png";
import andrea2 from "../../static/img/andrea1.png";
import andrea3 from "../../static/img/andrea3.png";
import andrea4 from "../../static/img/andrea4.png";
import andrea5 from "../../static/img/andrea4.png";





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
              <img src={andrea1} className="sliderimage" />
            </div>
            <div>
              <img src={andrea2} className="sliderimage" />
            </div>
            <div>
              <img src={andrea3} className="sliderimage" />
            </div>
            <div>
              <img src={andrea4} className="sliderimage" />
            </div>
            <div>
              <img src={andrea5} className="sliderimage" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

