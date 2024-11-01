import React, {useEffect, useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {submitReview} from "../../../../api/movies";
import {AxiosError} from "axios";
import ErrorSnackbar from "../../../ui/ErrorSnackbar";
import SuccessSnackbar from "../../../ui/SuccessSnackbar";
import {useAppSelector} from "../../../../store/useStore";
import {RootState} from "../../../../store/store";

const ReviewForm = () => {
  const [reviewError, setReviewError] = useState("");
  const [review, setReview] = useState("");
  const [postError, setPostError] = useState('')
  const [postSuccess, setPostSuccess] = useState('')
  const selectedMovie = useAppSelector((state: RootState) => state.movies.selectedMovie)


  useEffect(() => {
    setReview('')
  },[selectedMovie])

  const submitReviewHandler: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault()

    if (review.length>100) {
      setReviewError("Review must be maximum 100 chars");
      return
    }

    submitReview(review)
      .then(() => {
        setPostSuccess('Review posted successfully')
      })
      .catch(error => {
        if (error instanceof AxiosError) {
          const errorData: string = ("" + error.response?.data) || 'Something went wrong, please try again';
          setPostError(errorData);
        }
      })
  }

  return (
    <div>
      <ErrorSnackbar error={postError} setError={setPostError}/>
      <SuccessSnackbar message={postSuccess} setMessage={setPostSuccess}/>

      {selectedMovie && <p>Please leave a review below</p> }
      {selectedMovie &&
        <form onSubmit={submitReviewHandler} data-testid={"review-form"}>
          <Stack spacing={1} maxWidth={300}>
            <TextField
              required
              label="Review"
              name={"review"}
              multiline
              rows={2}
              error={!!reviewError}
              helperText={reviewError}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <Button variant={"contained"} type={"submit"}>Submit review</Button>

          </Stack>
        </form>
      }
    </div>
  );
};

export default ReviewForm;