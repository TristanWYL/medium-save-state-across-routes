import { useLocation, useNavigate } from "react-router-dom";
import { Counter } from "../components/counter";
export const LinkStatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const count = (location.state as { count: number } | undefined)?.count || 0;
  const setCountHandler = (count: number) => {
    navigate({}, { replace: true, state: { count } });
  };

  return (
    <Counter
      count={count}
      setCount={setCountHandler}
      title="Keep state with link state"
    />
  );
};
