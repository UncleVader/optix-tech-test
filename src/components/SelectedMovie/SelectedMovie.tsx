import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';
import {IMovie} from "../../types/movies";
import {Button, Stack, TextField} from "@mui/material";
import {submitReview} from "../../api/movies";
import {AxiosError} from "axios";
import ErrorSnackbar from "../ui/ErrorSnackbar";
import SuccessSnackbar from "../ui/SuccessSnackbar";

interface IProps {
  movie?: IMovie
}
const SelectedMovie:FC<IProps> = ({movie}) => {
  const [review, setReview] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [postError, setPostError] = useState('')
  const [postSuccess, setPostSuccess] = useState('')

  useEffect(() => {
    setReview('')
  },[movie])

  const handleReviewChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    if (e.target.value.length > 100) {
      setReviewError("Review must be maximum 100 chars");
      setReview(e.target.value.slice(0,100));
    } else {
      setReview(e.target.value);
    }
  };

  const submitReviewHandler: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault()

    submitReview(review)
      .then(() => {
        setPostSuccess('Review posted successfully')
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          const errorData: string = error.response?.data || 'Something went wrong, please try again';
          setPostError(errorData);
        }
      })
  }

  return (
    <div>
      <ErrorSnackbar error={postError} setError={setPostError}/>
      <SuccessSnackbar message={postSuccess} setMessage={setPostSuccess}/>

      {movie ? movie.title ? "You have selected " +  movie.title : "No Movie Title" : "No Movie Selected"}
      {movie && <p>Please leave a review below</p> }
      {movie &&
        <form onSubmit={submitReviewHandler}>
          <Stack spacing={1} maxWidth={300}>
            <TextField
              required
              label="Review"
              name={"review"}
              multiline
              maxRows={4}
              rows={2}
              error={!!reviewError}
              helperText={reviewError}
              value={review}
              onChange={handleReviewChange}

            />

            <Button variant={"contained"} type={"submit"}>Submit review</Button>

          </Stack>
        </form>
      }
    </div>
  );
};

export default SelectedMovie;