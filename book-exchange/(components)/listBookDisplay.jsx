"use client";
import * as React  from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getAccordionActionsUtilityClass } from '@mui/material';
import { getAllBooks } from '@/actions/books';

export default function ListAllBookDetails() {
    const [data,setData]=React.useState({});
    React.useEffect(()=>{
        async function getBook()
        {
            const res= await getAllBooks();
            setData(res);
        }
        getBook();
    },[]);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 100,
      editable: true,
    },
    {
      field: 'author',
      headerName: 'Author',
      width: 130,
      editable: true,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 130,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'Location',
      sortable: true,
      width: 130,
    },
    {
        field: 'contact',
        headerName: 'Owners Email',
        sortable: true,
        width: 130,
      },
      {
        field: 'status',
        headerName: 'Status',
        sortable: true,
        width: 130,
      },
  ];

  return (
    <div>
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        columns={columns}
        rows={data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
    </div>
  );
}
