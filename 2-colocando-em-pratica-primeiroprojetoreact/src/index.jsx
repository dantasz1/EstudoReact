import { useState } from "react";
import React from "react";
const ArmazenarDados = () => {
    const [primeiroNumero,setPrimeiroNumero] = useState(0)
    const [segundoNumero,setSegundoNumero] = useState(0)

    
    const [resultado, setResultado] = useState();
    const [historico, setHistorico] = useState([]);


    const calcularResultado = (operacao,primeiroNumero, segundoNumero ) => {
      let resultadoCalculado;

      switch (operacao) {
        case "+":
          resultadoCalculado = primeiroNumero + segundoNumero;
          break;
        case "-":
          resultadoCalculado = primeiroNumero - segundoNumero;
          break;
        case "":
          resultadoCalculado = primeiroNumero *segundoNumero;
          break;
        case "/":
          resultadoCalculado = primeiroNumero / segundoNumero;
          break;
        default:
          resultadoCalculado = 0;
      }

        const operacaoHistorico = `${primeiroNumero} ${operacao} ${segundoNumero} = ${resultadoCalculado}`;
        
        // setHistorico([...historico, operacaoHistorico]);                         // TEM ESSAS DUAS MANEIRAS DE CONCATENAR..
        setHistorico(prevHistorico => prevHistorico.concat(operacaoHistorico));

        setResultado(resultadoCalculado);
    }
    return (
        <>
        
        <div className="calculadora" >
            <h1 >Calculadora</h1>
            <label >
                Primeiro Numero
            <input  value={primeiroNumero}       type="text" onChange={e => setPrimeiroNumero(Number(e.target.value))}/>
            </label>
            <label >
                Segundo Numero
                <input  value= {segundoNumero } type="text" onChange={e => setSegundoNumero(Number(e.target.value))}/>
            </label>
            <span>Resultado : {resultado}</span>

            </div>

            <button onClick={() => calcularResultado('+', primeiroNumero, segundoNumero)}>+</button>
            <button onClick={() => calcularResultado('-', primeiroNumero, segundoNumero)}>-</button>
            <button onClick={() => calcularResultado('*', primeiroNumero, segundoNumero)}>*</button>
            <button onClick={() => calcularResultado('/', primeiroNumero, segundoNumero)}>/</button>



        <div>
            <h2>historico: {historico.map((resultado, i) => (
              <li> {resultado}</li>
            ))}
            </h2>
            <ul>
            
           
            </ul>
            
            </div>
            
            
         </>
    )
    }
   export default ArmazenarDados
   
