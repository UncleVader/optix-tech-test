import React, {FC} from 'react';
import {IMovie} from "../../types/movies";

interface IProps {
  movie?: IMovie
}
const SelectedMovie:FC<IProps> = ({movie}) => {
  return (
    <div>
      {movie ? movie.title ? "You have selected " +  movie.title : "No Movie Title" : "No Movie Selected"}
      {movie && <p>Please leave a review below</p> }
      {movie &&
        <form onSubmit={() => {}}>
          <label>
            Review:
            <input type="text"/>
          </label>
        </form>}
    </div>
  );
};

export default SelectedMovie;