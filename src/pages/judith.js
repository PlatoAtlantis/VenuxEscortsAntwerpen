import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faLock,
  faUserTie,

} from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/sliderj"

const Judith = () => {

  return (

    <>
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/pole.jpeg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-text-primary"
            style={{
              backgroundColor: "#ffffff",
              padding: "1rem",
            }}
          >
            Judith
          </h1>
        </div>

        <section className="section">
          <div className="container">
            <div>
              <div className="columns ">
                <div className="column has-text-black has-text-centered">

                  <p className="">Leeftijd: 23 jaar</p>

                  <p className="">Lengte: 1.71m</p>
                  <p className="">Gewicht: 53kg</p>

                  <div className="column container">
                    <Slider/>
                  </div>

                  <div className="section">
                    <button className="button is-primary has-text-warning">Nu boeken</button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
        <h1 className="title has-text-centered">Extra services</h1>
        <h2 className="subtitle has-text-centered">Al onze dames bieden de girlfriend experience aan. Hieronder vind u de extra services die Natasha aanbied.</h2>
        <div className="hero is-medium has-background-primary-dark has-text-centered">
          <div className="hero-body has-text-centered is-primary has-text-warning">
            <div className="container">
              <div className="columns">
                <div className="column">
                  Pijpen zonder condoom
                </div>
                <div className="column">
                  Anaal
                </div>
                <div className="column">
                  Squirting
                </div>
                <div className="column">
                  Zoenen
                </div>
                <div className="column">
                  Dominatrix
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    </>
  );
};

export default Judith;
