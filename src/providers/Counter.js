import { CounterContext } from "../context/counter";

import { useState } from "react";

export const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(1);

  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {children}
    </CounterContext.Provider>
  );
};
