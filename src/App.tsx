import { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  return (
    <button style={{ color: "red" }} onClick={() => setState((p) => p + 1)}>
      {state}
    </button>
  );
};

export default App;
