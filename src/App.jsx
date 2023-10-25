import { useState } from "react";
import "./App.css";

function App() {
  const [counter, updateCounter] = useState(0);

  function handleUpdateCounter(operation) {
    if (operation === "+") updateCounter((prev) => prev + 1);
    else
      updateCounter((prev) => {
        if (prev > 0) return prev - 1;
        return 0;
      });
  }

  return (
    <div className="counter-app">
      <label htmlFor="counter">Counter App</label>
      <input type="text" name="counter" id="counter" value={counter} />
      <div className="actions">
        <button onClick={() => handleUpdateCounter("+")}>+</button>
        <button onClick={() => handleUpdateCounter("-")}>-</button>
      </div>
    </div>
  );
}

export default App;
