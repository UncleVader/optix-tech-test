import {axiosInstance} from "./axiosInstance";
import {ICompany, IMovie} from "../types/movies";

export const getMovies = ():Promise<Array<IMovie>> => axiosInstance.get('/movies')

export const getMovieCompanies = ():Promise<Array<ICompany>> => axiosInstance.get('/movieCompanies')

export const submitReview = (review: string):Promise<Array<ICompany>> => axiosInstance.post('/submitReview', {review})
