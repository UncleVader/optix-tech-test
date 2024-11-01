import {useAppSelector} from "../../store/useStore";
import {RootState} from "../../store/store";

const SelectedMovie = () => {
  const selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie)

  return (
    <div>
      {selectedMovie ? selectedMovie.title ? "You have selected " +  selectedMovie.title : "No Movie Title" : "No Movie Selected"}
    </div>
  );
};

export default SelectedMovie;