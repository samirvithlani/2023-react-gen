import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export const DynamicTable = (props) => {
  return (
    <div>
      <DataGrid rows={props.rows} columns={props.columns}></DataGrid>
    </div>
  );
};
