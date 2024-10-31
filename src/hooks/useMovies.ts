import {useEffect, useState} from "react";
import {ICompany, IMovie} from "../types/movies";
import {getMovieCompanies, getMovies} from "../api/movies";
import {AxiosError} from "axios";
import {ISignInErrorResponse} from "../types/common";

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<Array<IMovie>>([])
  const [companies, setCompanies] = useState<Array<ICompany>>([])
  const [error, setError] = useState('')
  const [resetFlag, setResetFlag] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    setError('')

    const delay = () => new Promise<void>(resolve => setTimeout(() => resolve(), 1000))

    Promise.all([getMovies(), getMovieCompanies(), delay()])
      .then((res) => {
        console.log('res',res);
        setMovies(res[0])
        setCompanies(res[1])
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          const errorData: string = error.response?.data || 'Something went wrong, please try again';
          setError(errorData);
        }
        setMovies([])
      })
      .finally(() => {
        setIsLoading(false)
      })

  }, [resetFlag])

  return {
    isLoading,
    movies,
    companies,
    error,
    setError,
    setResetFlag
  }
}
export default useMovies