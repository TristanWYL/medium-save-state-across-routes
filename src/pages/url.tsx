import { Counter } from "../components/counter";
import { useLocation, useNavigate } from "react-router-dom";

export const UrlPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const _count = queryParams.get("count");
  const count = (_count && Number.parseInt(_count)) || 0;
  const setCountHandler = (count: number) => {
    queryParams.set("count", count.toString());
    navigate({ search: queryParams.toString() }, { replace: true });
  };
  return (
    <Counter
      count={count}
      setCount={setCountHandler}
      title="Keep state with url"
    />
  );
};
