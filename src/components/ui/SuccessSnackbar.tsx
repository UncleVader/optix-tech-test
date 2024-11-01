import React, {Dispatch, FC, SetStateAction} from 'react';
import MessageSnackbar from "./MessageSnackbar";

interface IProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const SuccessSnackbar: FC<IProps> = ({message, setMessage}) => {
  return <MessageSnackbar severity={"success"} message={message} setMessage={setMessage}/>
};

export default SuccessSnackbar;