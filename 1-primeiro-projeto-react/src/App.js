import { useState } from "react";
import './App.css'


function App() {
    const [firstNumber , setFirstNumber] = useState(0);
    const [secundNumber, setSecundNumber] = useState(0);
    const [resultado, setResultado] = useState(0);
    
    return (
        <>
        <h1 className="nomeCalculadora">Calculadora</h1>
       
       <div className ='card'>
       <label>
        Primeiro Numero
        <input  value={firstNumber}  onChange={e => setFirstNumber(Number(e.target.value))} />
        
       </label>
        <label>
            Segundo Numero
            <input value={secundNumber} 
            onChange={e => setSecundNumber(Number(e.target.value))}
             />
        </label>
        
           <span>Resultado : {resultado}</span>
        
       </div>
        
        <button onClick={() => setResultado(firstNumber + secundNumber)}>+</button>
        <button onClick={() => setResultado(firstNumber - secundNumber)}>-</button>
        <button onClick={() => setResultado(firstNumber * secundNumber)}>*</button>
        <button onClick={() => setResultado(firstNumber / secundNumber)}>/</button>
        </>
    )
}
export default App