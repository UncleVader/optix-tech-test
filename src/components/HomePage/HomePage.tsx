import React, {useMemo} from 'react';
import {Box} from "@mui/material";
import useMovies from "../../hooks/useMovies";
import RefreshButton from "../ui/RefreshButton";
import {SelectedMovie} from "../SelectedMovie";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesTableSkeleton from "../MoviesTable/MoviesTableSkeleton";
import ErrorSnackbar from "../ui/ErrorSnackbar";

const HomePage = () => {

  const {
    movies,
    companies,
    isLoading,
    error,
    setError,
    setResetFlag,
    selectedMovie,
    setSelectedMovieId,
  } = useMovies()

  const moviesLength = useMemo(() => movies?.length || 0, [movies])

  return (
    <Box>
      <>
        <ErrorSnackbar error={error} setError={setError}/>

        <h2>Welcome to Movie database!</h2>
        <RefreshButton
          buttonText={"Refresh"}
          moviesLength={moviesLength}
          onClick={() => setResetFlag(Date.now())}
        />

        <p>Total movies displayed {moviesLength}</p>

        {isLoading
          ? <MoviesTableSkeleton />
          :
          <MoviesTable
            movies={movies}
            companies={companies}
            setSelectedMovieId={setSelectedMovieId}
          />
        }
        <br/>

        <SelectedMovie movie={selectedMovie}/>
      </>
    </Box>
  );
};

export default HomePage;