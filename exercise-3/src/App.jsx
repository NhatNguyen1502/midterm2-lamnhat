import React from "react";
import { useState } from "react";

function App() {
  const [a , setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();

  function onA(event) {
    setA(event.target.value);
  }
  function onB(event) {
    setB(event.target.value);
  }
  function onCompute() {
    if (isNaN(a) || isNaN(b) || a=='' || b=='') {
      setResult("A and B shall be numbers!");
    } else {
      setResult(+a + +b);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      <input disabled value={result} className={typeof(result)!=='number' ? 'error' : ''}/>
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;


