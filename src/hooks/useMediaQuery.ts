import { MediaQueries } from "../helpers/styles";
import useMediaQueryMatcher from "./useMediaQueryMatcher";

interface IUserMediaQueryResult {
  minSize: boolean;
  betweenMinAndMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
}

function useMediaQuery(): IUserMediaQueryResult {
  const minSize = useMediaQueryMatcher(MediaQueries.NONE);
  const betweenMinAndMobile = useMediaQueryMatcher(MediaQueries.XXS);
  const isMobile = useMediaQueryMatcher(MediaQueries.XS);
  const isTablet = useMediaQueryMatcher(MediaQueries.SM);
  const isLaptop = useMediaQueryMatcher(MediaQueries.MD);
  const isDesktop = useMediaQueryMatcher(MediaQueries.LG);
  return {
    minSize,
    betweenMinAndMobile,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  };
}

export default useMediaQuery;
