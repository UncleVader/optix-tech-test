import React, {Dispatch, FC, SetStateAction} from 'react';
import {ICompany, IMovie} from "../../types/movies";
import { DataGrid } from '@mui/x-data-grid';
import useMoviesTable from "./useMoviesTable";



interface IProps {
  movies: Array<IMovie>;
  companies: Array<ICompany>;
  setSelectedMovie: Dispatch<SetStateAction<IMovie|undefined>>
}

const MoviesTable:FC<IProps> = ({movies, companies, setSelectedMovie}) => {
  const {
    data,
    columns
  } = useMoviesTable(movies, companies)

  return (
    <DataGrid
      rows={data}
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
  );
};

export default MoviesTable;