import React from "react";
import TableData from "../table-data/tableData";
import withData from "../withData";

const MovInfo = ({ data }) => {
  console.log(data.movimientos);
  return (
    <div className="movi">
      <h3>MOVIMIENTOS</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {data.movimientos
            ? data.movimientos.map((mov) => (
                <TableData
                  fecha={mov.fecha}
                  descripcion={mov.descripcion}
                  monto={mov.monto}
                />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

const Movimientos = withData(
  MovInfo,
  "http://bankapp.endcom.mx/api/bankappTest/movimientos"
);

export default Movimientos;
