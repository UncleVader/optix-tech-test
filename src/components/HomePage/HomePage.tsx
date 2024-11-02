import {lazy, Suspense} from "react"
import {Box} from "@mui/material";
import useMovies from "../../hooks/useMovies";
import RefreshButton from "../ui/RefreshButton";
const MoviesTable = lazy(() => import("../MoviesTable/MoviesTable"));
import MoviesTableSkeleton from "../MoviesTable/MoviesTableSkeleton";
const ErrorSnackbar = lazy(() => import("../ui/ErrorSnackbar"));
const ReviewSection = lazy(() => import("../ReviewSection/ReviewSection"));
const SelectedMovieSection = lazy(() => import("../SelectedMovieSection/SelectedMovieSection"));

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
    <Suspense fallback={"Loading..."}>

      <Box>
        <>
          <ErrorSnackbar error={error} setError={setError}/>

          <h2>Welcome to Movie database!</h2>
          <RefreshButton
            buttonText={"Refresh"}
            moviesLength={moviesLength}
            onClick={() => setResetFlag(Date.now())}
            error={error}
            disabled={isLoading}
          />

          <p>Total movies displayed {moviesLength}</p>

          {isLoading
            ? <MoviesTableSkeleton/>
            :
            <MoviesTable
              movies={movies}
              companies={companies}
            />
          }

          <br/>

          <SelectedMovieSection/>

          <ReviewSection/>
        </>
      </Box>
    </Suspense>
  );
};

export default HomePage;