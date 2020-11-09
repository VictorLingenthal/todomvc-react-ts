import { useMemo } from 'react';
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";

export function useRouter() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      pathname: location.pathname,
      match,
      location,
      history
    };
  }, [match, location, history]);
}
