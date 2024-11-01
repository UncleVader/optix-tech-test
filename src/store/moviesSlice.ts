import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMovie} from "../types/movies";

export interface MoviesState {
  selectedMovie: IMovie | undefined;
}

export const initialState: MoviesState = {
  selectedMovie: undefined,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<IMovie | undefined>) => {
      state.selectedMovie = action.payload
    },
  }
})

export const {setSelectedMovie} = moviesSlice.actions

export default moviesSlice.reducer