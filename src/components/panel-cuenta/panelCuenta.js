import React from "react";
import Movimientos from "../movimientos/movimientos";
import Tarjetas from "../tarjetas/tarjetas";
import "./panelCuenta.styles.css";

const PanelCuenta = () => {
  return (
    <section className="panel-cuenta">
      <Tarjetas />
      <Movimientos />
    </section>
  );
};

export default PanelCuenta;
