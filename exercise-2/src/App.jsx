import React from "react";
import { useState } from "react";
function App() {
  const [text, setText] = useState('');
  const [upperCasetext, setUpperCaseText] = useState('');

  function onKeyUp(event) {
    setText(event.target.value);
    setUpperCaseText(event.target.value.toUpperCase());
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input value={text} onChange={onKeyUp}/>

      <p>
        <label>Here is the text in upper case</label>

        <input disabled value={upperCasetext} />
      </p>
    </main>
  );
}

export default App;

