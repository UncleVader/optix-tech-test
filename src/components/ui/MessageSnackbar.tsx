import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {Alert, Snackbar, SnackbarCloseReason} from "@mui/material";

interface IProps {
  severity: "error" | "success";
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const MessageSnackbar: FC<IProps> = ({severity, message, setMessage}) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(!!message)
  }, [message])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessage('')
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{width: '100%'}}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackbar;