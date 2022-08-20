import React from "react";

interface ContextProps {
  value: number;
  setValue: (value: number) => void;
}
export const Context = React.createContext<ContextProps>({
  value: 0,
  setValue: (value: number) => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(0);
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
};
