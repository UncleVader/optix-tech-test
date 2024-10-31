export interface IMovie {
  id: string;
  reviews: Array<number>;
  title: string;
  filmCompanyId: string;
  cost: number;
  releaseYear: number;
}

export interface ICompany {
  id: string;
  name: string;
}

export interface IMovieData {
  id: string;
  title: string;
  averageReview: number;
  filmCompany: string;
}