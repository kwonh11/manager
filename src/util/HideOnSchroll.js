import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from '@material-ui/core/Slide';

// GNB의 슬라이드기능
export default function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}