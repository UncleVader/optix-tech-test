import {Box} from "@mui/material";
import useMovies from "../../hooks/useMovies";
import RefreshButton from "../ui/RefreshButton";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesTableSkeleton from "../MoviesTable/MoviesTableSkeleton";
import ErrorSnackbar from "../ui/ErrorSnackbar";
import ReviewSection from "../ReviewSection/ReviewSection";
import {SelectedMovieSection} from "../SelectedMovieSection";

const HomePage = () => {

  const {
    movies,
    moviesLength,
    companies,
    isLoading,
    error,
    setError,
    setResetFlag,
  } = useMovies()


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
          />
        }

        <br/>

        <SelectedMovieSection />

        <ReviewSection />
      </>
    </Box>
  );
};

export default HomePage;