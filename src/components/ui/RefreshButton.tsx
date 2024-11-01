import React, {FC} from 'react';
import {Button} from "@mui/material";

interface IProps {
  buttonText: string;
  error: string;
  moviesLength: number;
  onClick: () => void;
  disabled: boolean;
}

const RefreshButton: FC<IProps> = ({disabled, buttonText, moviesLength, onClick, error}) => {
  return (
    error || moviesLength
      ? <Button variant={"outlined"} onClick={() => onClick()} disabled={disabled}>{buttonText}</Button>
      : <p>No movies loaded yet</p>
  )
};

export default RefreshButton;