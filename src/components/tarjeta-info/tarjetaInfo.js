import React from "react";
import "./tarjetaInfo.styles.css";

const TarjetaInfo = ({ status, saldo, numero, nombre, tipo }) => {
  return (
    <div
      className={
        status === "activa" ? "tarjeta-info activa" : "tarjeta-info desactivada"
      }
    >
      <p>
        <span>{status}</span>
        <span>{`$${saldo}.00`}</span>
      </p>
      <p>{numero}</p>
      <p>{nombre}</p>
      <p>{tipo}</p>
    </div>
  );
};

export default TarjetaInfo;
