"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MuiDemoRows from "@/app/organisms/rows/mui-demo-rows";
import MuiDemoColumns from "@/app/organisms/columns/mui-demo-columns";

const columns: GridColDef<(typeof rows)[number]>[] = MuiDemoColumns();

const rows = MuiDemoRows();

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
