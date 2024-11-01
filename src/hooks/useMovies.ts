import {useCallback, useEffect, useState} from "react";
import {ICompany, IMovie} from "../types/movies";
import {getMovieCompanies, getMovies} from "../api/movies";
import {AxiosError} from "axios";

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<Array<IMovie>>([])
  const [companies, setCompanies] = useState<Array<ICompany>>([])
  const [error, setError] = useState('')
  const [resetFlag, setResetFlag] = useState(0)
  const [selectedMovieId, setSelectedMovieId] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<IMovie|undefined>();

  const resetState = useCallback(() => {
    setMovies([])
    setSelectedMovie(undefined)
    setSelectedMovieId('')
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
          const errorData: string = error.response?.data || 'Something went wrong, please try again';
          setError(errorData);
        }
        resetState()
      })
      .finally(() => {
        setIsLoading(false)
      })

  }, [resetFlag])


  useEffect(() => {
    setSelectedMovie(movies.find(m => m.id===selectedMovieId))
  }, [selectedMovieId])

  return {
    isLoading,
    movies,
    companies,
    error,
    setError,
    setResetFlag,
    selectedMovie,
    setSelectedMovieId,
  }
}
export default useMovies