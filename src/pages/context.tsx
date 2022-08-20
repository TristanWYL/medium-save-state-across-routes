import { Counter } from "../components/counter";
import React from "react";
import { Context } from "../utils/context";

export const ContextPage = () => {
  const { value, setValue } = React.useContext(Context);
  return (
    <Counter
      count={value}
      setCount={setValue}
      title="Keep state with Context"
    />
  );
};
