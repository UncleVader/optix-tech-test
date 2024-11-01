import React, {FC} from 'react';
import {Button} from "@mui/material";

interface IProps {
  buttonText: string;
  moviesLength: number;
  onClick: () => void
}

const RefreshButton: FC<IProps> = ({buttonText, moviesLength, onClick}) => {
  return (
    moviesLength
      ? <Button variant={"outlined"} onClick={() => onClick()}>{buttonText}</Button>
      : <p>No movies loaded yet</p>
  )
};

export default RefreshButton;