import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCrown,
} from "@fortawesome/free-solid-svg-icons"

const Girls = () => {

  return (
    <>
      <div className="">
        <div className="container">
    <div className="columns has-text-centered">

      <div className="column">
        <Link to="/daniela">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/daniela1.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                  <h2 className="title mb-0 fadename has-text-warning">Daniela</h2>
                <p className="fadenameslow">Leeftijd: 24 jaar</p>
                <p className="fadenameslow">Lengte: 1.63m</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="column">
        <Link to="/vanessa">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/vanessa4.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Vanessa</h2>
                <p className="fadenameslow">Leeftijd: 27 jaar</p>
                <p className="fadenameslow">Lengte: 1.74m</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="column">
        <Link to="/judith">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/judith1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
          <h2 className="title mb-0 fadename has-text-warning">Judith</h2>
            <p className="fadenameslow">Leeftijd: 23 jaar</p>
            <p className="fadenameslow">Lengte: 1.71m</p>
          </div>
          </div>
        </div>
        </Link>
      </div>

    </div>

  <div className="columns has-text-centered centered">

    <div className="column">
      <Link to="/vera">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/vera1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Vera</h2>
              <p className="fadenameslow">Leeftijd: 25 jaar</p>
              <p className="fadenameslow">Lengte: 1.68m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/nicki">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/Nicki1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Nicki</h2>
              <p className="fadenameslow">Leeftijd: 29 jaar</p>
              <p className="fadenameslow">Lengte: 1.70m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/andrea">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/andrea2.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Andrea</h2>
              <p className="fadenameslow">Leeftijd: 22 jaar</p>
              <p className="fadenameslow">Lengte: 1.61m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  </div>

        </div>
      </div>
    </>
);
};

export default Girls;
