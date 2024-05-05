import { useState } from "react";

const messages = [
  "Creer",
  "Asumir",
  "Actuar",
];

function App() {
  const step =  3;

  return (
    <div className="steps">
      <div className="numbers">        
        <div className={`${step >=1? "active": ""}`}>1</div>
        <div className={`${step >=2? "active": ""}`}>2</div>
        <div className={`${step >=3? "active": ""}`}>3</div>
      </div>
      <p className="message">Paso:{step} {messages[step -1]}</p>
      <div className="buttons">
             <button style={{background:'#7950f2', color:'#fff'}}>Anterior</button>
             <button style={{background:'#7950f2', color:'#fff'}}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;
