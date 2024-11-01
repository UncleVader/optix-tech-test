import React, {useCallback} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {ReviewForm} from "../ReviewForm";
import {useAppDispatch, useAppSelector} from "../../../../store/useStore";
import {RootState} from "../../../../store/store";
import {IMovie} from "../../../../types/movies";
import {setSelectedMovie as setSelectedMovieAction} from "../../../../store/moviesSlice";


const ReviewModal = () => {
  const selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie)
  const dispatch = useAppDispatch()
  const setSelectedMovie = (movie:IMovie|undefined) => dispatch(setSelectedMovieAction(movie))

  const handleClose = useCallback(() => {
    setSelectedMovie(undefined)
  },[setSelectedMovie])

  return (
    <Dialog
      open={!!selectedMovie}
      onClose={handleClose}
    >
      <DialogTitle>Review</DialogTitle>
      <DialogContent>
        <ReviewForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;