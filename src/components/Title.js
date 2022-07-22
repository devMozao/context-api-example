import { Counter } from "./Counter";

import { useCounter } from "../hooks/counter";

export const Title = ({ title }) => {
  const [value] = useCounter();

  return (
    <>
      <h1>Título: {title}</h1>

      <div>contador: {value}</div>
      <Counter />
    </>
  );
};

export default Title;
