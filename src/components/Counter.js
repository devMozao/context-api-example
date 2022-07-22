import { useCounter } from "../hooks/counter";

export const Counter = () => {
  const [value, setValue] = useCounter();

  return (
    <div>
      <span>Valor atual: {value}</span>
      <button onClick={() => setValue(value + 1)}>Adicionar</button>
    </div>
  );
};

export default Counter;
