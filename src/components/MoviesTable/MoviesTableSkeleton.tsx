import React from 'react';
import {Skeleton, Stack} from "@mui/material";

const MoviesTableSkeleton = () => {
  return (
    <Stack width={"100%"} spacing={1}>
      <>
        {Array.from(Array(5)).map(_ => <Skeleton variant="rectangular" width={"100%"} height={30}/>)}
      </>
    </Stack>
  );
};

export default MoviesTableSkeleton;