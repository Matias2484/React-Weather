import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div
        className={
          city.weather === "Clear"
            ? "clear"
            : city.weather === "Clouds"
            ? "clouds"
            : city.weather === "Rain"
            ? "rain"
            : false
        }
      >
        <div className="container">
          <div>
            <h2 className="nombre">{city.name}</h2>
            <div className="info">
              <div>Temperatura: {city.temp} º</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Cantidad de nubes: {city.clouds}</div>
              <div>Latitud: {city.latitud}º</div>
              <div>Longitud: {city.longitud}º</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
