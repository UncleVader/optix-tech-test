import {ICompany, IMovie} from "../../src/types/movies";

export const mockedMoviesState1 = {
  movies: {
    selectedMovie: {
      id: "1",
      reviews: [6, 8, 7, 9, 8, 7, 8],
      title: "A long train ride",
      filmCompanyId: "1",
      cost: 1020,
      releaseYear: 2001
    },
  }
}

export const mockMovieCompanyData: ICompany[] = [
  {id: "1", name: "Test Productions"},
];

export const mockMovieData: IMovie[] = [
  {id: "1", reviews: [6, 8, 3, 9, 8, 7, 8], title: "A Testing Film", filmCompanyId: "1", cost: 534, releaseYear: 2005},
  {id: "2", reviews: [5, 7, 3, 4, 1, 6, 3], title: "Mock Test Film", filmCompanyId: "1", cost: 6234, releaseYear: 2006},
];
