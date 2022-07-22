import { useContext } from "react";
import CounterContext from "../context/counter";

export const useCounter = () => {
  const { value, setValue } = useContext(CounterContext);
  return [value, setValue];
};

export default useCounter;
