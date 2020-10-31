import React from "react";

const TableData = ({ fecha, descripcion, monto }) => {
  return (
    <tr>
      <td>{fecha}</td>
      <td>{descripcion}</td>
      <td>{`$${monto}`}</td>
    </tr>
  );
};

export default TableData;
