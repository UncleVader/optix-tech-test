import React, {useMemo, useState} from 'react';
import {Box} from "@mui/material";
import useMovies from "../../hooks/useMovies";
import {IMovie} from "../../types/movies";
import RefreshButton from "../ui/RefreshButton";
import {SelectedMovie} from "../SelectedMovie";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesTableSkeleton from "../MoviesTable/MoviesTableSkeleton";
import ErrorSnackbar from "../ui/ErrorSnackbar";

const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>();

  const {
    movies,
    companies,
    isLoading,
    error,
    setError,
    setResetFlag
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
          : <MoviesTable movies={movies} companies={companies} setSelectedMovie={setSelectedMovie}/>
        }
        <br/>

        <SelectedMovie movie={selectedMovie}/>
      </>
    </Box>
  );
};

export default HomePage;