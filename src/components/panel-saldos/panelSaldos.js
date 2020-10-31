import React from "react";
import CardInfo from "../card-info/cardInfo";
import withData from "../withData";
import "./panelSaldos.styles.css";

const Saldos = ({ data }) => {
  return (
    <section className="panel-saldos">
      <CardInfo
        textInfo={"SALDO GENERAL EN CUENTAS"}
        total={data.saldos ? `$${data.saldos[0].saldoGeneral}.00` : ""}
      />
      <CardInfo
        textInfo={"TOTAL DE INGRESOS"}
        total={data.saldos ? `$${data.saldos[0].ingresos}.00` : ""}
      />
      <CardInfo
        textInfo={"TOTAL DE GASTOS"}
        total={data.saldos ? `$${data.saldos[0].gastos}.00` : ""}
      />
    </section>
  );
};

const PanelSaldos = withData(
  Saldos,
  "http://bankapp.endcom.mx/api/bankappTest/saldos"
);

export default PanelSaldos;
