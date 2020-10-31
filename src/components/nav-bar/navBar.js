import React from "react";
import "./navBar.styles.css";
import WithData from "../withData";

const NavBar = ({ data }) => {
  return (
    <nav className="nav-bar">
      <a href="#!" title="Bankapp">
        Bankapp
      </a>
      <p>Powered by Conecta</p>
      <a href="#!" title="Mis Cuentas">
        MIS CUENTAS
      </a>
      <a href="#!" title="Enviar Dinero">
        ENVIAR DINERO
      </a>
      <p>
        <span>{data.cuenta ? data.cuenta[0].nombre : ""}</span>
        <span>
          Último inicio{" "}
          {data.cuenta ? data.cuenta[0].ultimaSesion.split(" ")[0] : ""}
        </span>
      </p>
    </nav>
  );
};

const Navigation = WithData(
  NavBar,
  "http://bankapp.endcom.mx/api/bankappTest/cuenta"
);

export default Navigation;
