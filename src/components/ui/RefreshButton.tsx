import React, {FC} from 'react';

interface IProps {
  buttonText: string;
  moviesLength: number;
  onClick: () => void
}

const RefreshButton: FC<IProps> = ({buttonText, moviesLength, onClick}) => {
  return (
    moviesLength
      ? <button onClick={() => onClick()}>{buttonText}</button>
      : <p>No movies loaded yet</p>
  )
};

export default RefreshButton;