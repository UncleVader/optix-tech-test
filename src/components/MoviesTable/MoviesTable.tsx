import React, {FC} from 'react';
import {ICompany, IMovie} from "../../types/movies";
import {DataGrid, GridRowSelectionModel} from '@mui/x-data-grid';
import useMoviesTable from "../../hooks/useMoviesTable";

interface IProps {
  movies: Array<IMovie>;
  companies: Array<ICompany>;
}

const MoviesTable:FC<IProps> = (
  {
    movies,
    companies,
  }) =>
{
  const {
    data,
    columns,
    setSelectedMovie
  } = useMoviesTable(movies, companies)

  return (
    <DataGrid
      data-testid={"movies-datagrid"}
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
        setSelectedMovie(movies.find(m => m.id===rowSelectionModel[0]))
      }}
    />
  );
};

export default MoviesTable;