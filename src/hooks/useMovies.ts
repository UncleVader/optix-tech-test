import {useCallback, useEffect, useMemo, useState} from "react";
import {ICompany, IMovie} from "../types/movies";
import {getMovieCompanies, getMovies} from "../api/movies";
import {AxiosError} from "axios";
import {setSelectedMovie as setSelectedMovieAction} from "../store/moviesSlice";
import {useAppDispatch, useAppSelector} from "../store/useStore";
import {RootState} from "../store/store";

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<Array<IMovie>>([])
  const [companies, setCompanies] = useState<Array<ICompany>>([])
  const [error, setError] = useState('')
  const [resetFlag, setResetFlag] = useState(0)
  const moviesLength = useMemo(() => movies?.length || 0, [movies])

  const dispatch = useAppDispatch()
  const selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie)
  const setSelectedMovie = (movie:IMovie|undefined) => dispatch(setSelectedMovieAction(movie))

  const resetState = useCallback(() => {
    setMovies([])
    setSelectedMovie(undefined)
    setSelectedMovie(undefined)
  },[])

  useEffect(() => {
    resetState()
    setIsLoading(true)

    const delay = () => new Promise<void>(resolve => setTimeout(() => resolve(), 1000))


    Promise.all([getMovies(), getMovieCompanies(), delay()])
      .then((res) => {
        setMovies(res[0])
        setCompanies(res[1])
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          const errorData: string = ("" + error.response?.data) || 'Something went wrong, please try again';
          setError(errorData);
        }
        resetState()
      })
      .finally(() => {
        setIsLoading(false)
      })

  }, [resetFlag])


  return {
    isLoading,
    movies,
    moviesLength,
    companies,
    error,
    setError,
    setResetFlag,
    selectedMovie,
  }
}
export default useMovies