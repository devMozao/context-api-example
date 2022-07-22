import { Title } from "./components";

import { CounterProvider } from "./providers/Counter";

function App() {
  return (
    <>
      <CounterProvider>
        <Title title="Contador" />
      </CounterProvider>
    </>
  );
}

export default App;
