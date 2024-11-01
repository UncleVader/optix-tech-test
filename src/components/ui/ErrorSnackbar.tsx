import React, {Dispatch, FC, SetStateAction} from 'react';
import MessageSnackbar from "./MessageSnackbar";

interface IProps {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const ErrorSnackbar: FC<IProps> = ({error, setError}) => {


  return <MessageSnackbar severity={"error"} message={error} setMessage={setError}/>

};

export default ErrorSnackbar;