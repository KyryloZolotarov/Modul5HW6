import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    CircularProgress,
    Container,
    Grid,
} from '@mui/material'
import {
  GridEventListener,
  useGridApiEventHandler,
  useGridApiContext,
  DataGrid,
  GridColDef
} from '@mui/x-data-grid';
import {IResource} from "../../../interfaces/resources"
import {useNavigate} from "react-router-dom";

const resourcesTable: FC<any> = (props): ReactElement => {
  const navigate = useNavigate()
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'year', headerName: 'Year', width: 180 },
        { field: 'color', headerName: 'Color', width: 180 },
        { field: 'pantone_value', headerName: 'Pantone Value', width: 180 },
      ];
const rows: IResource[] = []
const temp = Object.values(props)

for(let i=0; i<temp.length; i++){
  rows.push(temp[i] as IResource)
}

const handleRowClick: GridEventListener<'rowClick'> = (  params, event, details) => {
  console.log("event trigered");
  console.log(params);
  navigate(`/resource/${params.row.id}`);
}

 return(
    <div style={{ height: 425, width: '70%' }}>
    <DataGrid onRowClick={handleRowClick}
      rows={rows}
      columns={columns}
       initialState={{
         pagination: {
       paginationModel: { page: 0, pageSize: 6 },
         },
       }}
    pageSizeOptions={[6, 12]}/>
    </div>
 );
}

export default resourcesTable