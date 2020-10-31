import React from "react";
import TarjetaInfo from "../tarjeta-info/tarjetaInfo";
import withData from "../withData";

const ListaCuentas = ({ data }) => {
  return (
    <div>
      <h3>MIS CUENTAS</h3>
      {data.tarjetas
        ? data.tarjetas.map((tarjeta) => (
            <TarjetaInfo
              key={tarjeta.id}
              status={tarjeta.estado}
              saldo={tarjeta.saldo}
              numero={tarjeta.tarjeta}
              nombre={tarjeta.nombre}
              tipo={tarjeta.tipo}
            />
          ))
        : null}
      <a href="#!" title="Agregar Tarjeta">
        <span>AGREGAR TARJETA</span>
        <span className="plus"></span>
      </a>
    </div>
  );
};

const Tarjetas = withData(
  ListaCuentas,
  "http://bankapp.endcom.mx/api/bankappTest/tarjetas"
);

export default Tarjetas;
