import React from "react";

const singleTable = ({ table, tableSelect, selected, reserveList }) => {
  let occupied = false;
  if (reserveList.some((ele) => ele.table_num === table.name)) {
    occupied = true;
  }
  const tableClick = () => {
    tableSelect(table.name);
  };

  return (
    <div
      className="single-table"
      style={{
        position: "absolute",
        top: table.y_pos,
        left: table.x_pos,
        width: table.width,
        height: table.height,
        border: table.name !== selected ? "1px solid black" : "3px solid green",
        backgroundColor: occupied ? "#F24B4B" : "#49FF33",
      }}
      onClick={occupied?null:tableClick}
    >
      <p style={{ margin: "auto", width: "50%", paddingTop: "35%" }}>{table.name}</p>
    </div>
  );
};

export default singleTable;
