import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card animate__animated animate__backInDown">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body ">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 minimo">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 maximo">
            <p>Max</p>
            <p>{max}°</p>
          </div>

          <img
            className=" col-sm-4 col-md-4 col-lg-4 iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            alt="icono_clima"
          />
        </div>
      </div>
    </div>
  );
}
