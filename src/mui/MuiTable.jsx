import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import React from "react";
import { DynamicTable } from "./DynamicTable";

export const MuiTable = () => {
  function customeToolBar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          csvOptions={{
            fileName: "myFile",
            fields: ["id", "firstName", "lastName"],
          }}
          printOptions={{
            fileName: "myFile",
            hideFooter: true,
            hideToolbar: true,
          }}
        ></GridToolbarExport>
      </GridToolbarContainer>
    );
  }
  var columns = [
    { field: "id", headerName: "ID", width: 70, sortable: false },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: true,
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      editable: true,
    },
  ];

  var rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  ];
  return (
    <div>
      <h1>MuiTable</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: customeToolBar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[2, 5, 10]}
      ></DataGrid>
      {/* <DynamicTable rows={rows} columns ={columns}></DynamicTable> */}
    </div>
  );
};
