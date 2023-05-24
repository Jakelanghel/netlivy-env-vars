import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>{process.env.VITE_APP_VAR}</h1>
      <p>Clean React App</p>
    </div>
  );
}

export default App;
