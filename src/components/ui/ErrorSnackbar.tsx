import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {Alert, Snackbar, SnackbarCloseReason} from "@mui/material";

interface IProps {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const ErrorSnackbar: FC<IProps> = ({error, setError}) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(!!error)
  }, [error])
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setError('')
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{width: '100%'}}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorSnackbar;