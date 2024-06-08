import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a , setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }
  function onB(event) {
    setB(event.target.value);
  }
  function onCompute(event) {
    if (isNaN(a) || isNaN(b)) {
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


