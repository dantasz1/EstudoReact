import { useState } from "react"


const ArmazenarDados  = () => {
 
  
  
    const [primeiroNumero, setPrimeiroNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0) 
  const [resultado , setResultado] = useState()
  const [historico, setHistorico] = useState([])

  const armazenarDados = (operacaoHistorico, resultadoCalculado) => {
    setHistorico([...historico, operacaoHistorico]);
    setResultado(resultadoCalculado);
  };
  


  return (
    {primeiroNumero,setPrimeiroNumero,
      segundoNumero,setSegundoNumero,
      resultado,setResultado,
      historico,setHistorico,
    armazenarDados
    
    
    } 
  )
}
export default ArmazenarDados

