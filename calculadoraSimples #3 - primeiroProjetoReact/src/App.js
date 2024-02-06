
import './App.css';
import ArmazenarDados from './componentes/atomos/armazenarDados';
import Input from './componentes/atomos/input';
import Botao from './componentes/atomos/botaoOperacao';
import calcularResultado from './componentes/moleculas/switch';
function App() {

 const    {primeiroNumero,setPrimeiroNumero,
          segundoNumero,setSegundoNumero,
          resultado,setResultado,
          historico,setHistorico,armazenarDados} = ArmazenarDados()

          const calcularResultadoWrapper = (operacao) => {
            const { operacaoHistorico, resultadoCalculado } = calcularResultado(
              operacao,
              primeiroNumero,
              segundoNumero
            );
          
            armazenarDados(operacaoHistorico, resultadoCalculado);
          };
 

  return (
    <>
    <div 
    className='calculadora'>

      <h1>Calculadora</h1>
      <Input titulo = 'Primeiro Numero' numero= {primeiroNumero} set = {setPrimeiroNumero}></Input>
      
      <Input titulo = 'Segundo Numero' numero= {segundoNumero} set = {setSegundoNumero}></Input>

        <span>Resultado : {resultado}</span>
          </div>
          <Botao resultadoProps={() => calcularResultadoWrapper('+')} numeroUm={primeiroNumero} numeroDois={segundoNumero}>+</Botao> 
          <Botao resultadoProps={() => calcularResultadoWrapper('-')} numeroUm={primeiroNumero} numeroDois={segundoNumero}>-</Botao> 
          <Botao resultadoProps={() => calcularResultadoWrapper('*')} numeroUm={primeiroNumero} numeroDois={segundoNumero}>*</Botao>
          <Botao resultadoProps={() => calcularResultadoWrapper('/')} numeroUm={primeiroNumero} numeroDois={segundoNumero}>/</Botao>
          
        


        <h2>historico: {historico.map((resultado, i) => (
              <li> {resultado}</li>
            ))}
            </h2>
    
    </>
  );
}

export default App;
