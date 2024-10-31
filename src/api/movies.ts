import {axiosInstance} from "./axiosInstance";
import {ICompany, IMovie} from "../types/movies";

export const getMovies = ():Promise<Array<IMovie>> => axiosInstance.get('/movies')

export const getMovieCompanies = ():Promise<Array<ICompany>> => axiosInstance.get('/movieCompanies')
