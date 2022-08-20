import { Counter } from "../components/counter";
import { updated, type State } from "../utils/store";
import { useSelector, useDispatch } from "react-redux";

export const StateMgmtPage = () => {
  const count = useSelector((state: State) => state.value);
  const dispatch = useDispatch();
  return (
    <Counter
      count={count}
      setCount={(val) => dispatch(updated(val))}
      title="Keep state with Redux"
    />
  );
};
