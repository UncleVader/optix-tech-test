import {GridColDef} from "@mui/x-data-grid";
import {ICompany, IMovie, IMovieData} from "../../types/movies";
import {useMemo} from "react";

const useMoviesTable = (movies:IMovie[], companies:ICompany[]) => {
  const moviesData:IMovieData[] = useMemo(() => movies.map(m => {
    return {
      id: m.id,
      title: m.title,
      averageReview: m.reviews?.length ? Math.round(m.reviews.reduce((acc: any, i: any) => (acc + i), 0) / m.reviews.length * 10) / 10 : 0,
      filmCompany: companies.find(c => c.id === m.filmCompanyId)?.name || 'unknown'
    }
  }), [movies, companies])

  const columns: GridColDef<IMovieData>[] = [
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'averageReview',
      type: 'number',
      headerName: 'Av. review',
      width: 100,
    },
    {
      field: 'filmCompany',
      headerName: 'Company',
      width: 200,
    },
  ];

  return {
    data: moviesData,
    columns
  }
}

export default useMoviesTable