import {lazy, Suspense} from "react"
import ReviewForm from "./components/ReviewForm/ReviewForm";
const ReviewModal = lazy( () => import("./components/ReviewModal/ReviewModal"));
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ReviewSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Suspense fallback={"Loading..."}>
      {isMobile ? <ReviewModal/> : <ReviewForm/>}
    </Suspense>
  )
};

export default ReviewSection;