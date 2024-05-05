import { useState } from "react";

const messages = [
  "Creer",
  "Asumir",
  "Actuar",
];


function App() {
  const [step, setStep] = useState(1); 
  const handlePrevious = ()=>{
      if(step >1) setStep(step -1);
  }
  const handleNext = ()=>{
    if(step <3) setStep(step +1);
  }

  return (
    <div className="steps">
      <div className="numbers">        
        <div className={`${step >=1? "active": ""}`}>1</div>
        <div className={`${step >=2? "active": ""}`}>2</div>
        <div className={`${step >=3? "active": ""}`}>3</div>
      </div>
      <p className="message">Paso:{step} {messages[step -1]}</p>
      <div className="buttons">
             <button 
             style={{background:'#7950f2', color:'#fff'}}
             onClick={handlePrevious}
             >Anterior</button>
             <button 
             style={{background:'#7950f2', color:'#fff'}}
              onClick={handleNext}
             >Siguiente</button>
      </div>
    </div>
  );
}

export default App;
