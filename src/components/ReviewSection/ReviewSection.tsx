import ReviewForm from "./components/ReviewForm/ReviewForm";
import ReviewModal from "./components/ReviewModal/ReviewModal";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ReviewSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <ReviewModal/> : <ReviewForm/>
};

export default ReviewSection;