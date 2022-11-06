import { useState } from "react";
import { Vocab } from "./data/vocab";
import "./App.css";

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));

  return (
    <div className="App">
      <h1>{Vocab[randomNum].FIELD1}</h1>
      <p>{Vocab[randomNum].FIELD2}</p>
    </div>
  );
}

export default App;
