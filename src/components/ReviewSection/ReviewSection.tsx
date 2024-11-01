import React, {FC} from 'react';
import {Box} from "@mui/material";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewModal from "./components/ReviewModal/ReviewModal";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ReviewSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isMobile ? <Box sx={{
          display: {xs: "block", sm: "none"}
        }}>
          <ReviewModal/>
        </Box>
        : <Box sx={{
          display: {xs: "none", sm: "block"}
        }}>
          <ReviewForm/>
        </Box>
      }
    </>
  );
};

export default ReviewSection;