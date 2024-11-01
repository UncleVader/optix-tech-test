import React, {Dispatch, FC, SetStateAction} from 'react';
import {ICompany, IMovie} from "../../types/movies";
import {DataGrid, GridRowParams, GridRowSelectionModel} from '@mui/x-data-grid';
import useMoviesTable from "./useMoviesTable";



interface IProps {
  movies: Array<IMovie>;
  companies: Array<ICompany>;
  setSelectedMovieId: Dispatch<SetStateAction<string>>
}

const MoviesTable:FC<IProps> = (
  {
    movies,
    companies,
    setSelectedMovieId
  }) =>
{
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
      hideFooterSelectedRowCount={true}
      onRowSelectionModelChange={(rowSelectionModel: GridRowSelectionModel) => {
        setSelectedMovieId(rowSelectionModel[0] as string)
      }}
    />
  );
};

export default MoviesTable;