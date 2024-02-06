const calcularResultado = (operacao,primeiroNumero, segundoNumero ) => {
    let resultadoCalculado;

    switch (operacao) {
      case "+":
        resultadoCalculado = primeiroNumero + segundoNumero;
        break;
      case "-":
        resultadoCalculado = primeiroNumero - segundoNumero;
        break;
      case "*":
        resultadoCalculado = primeiroNumero *segundoNumero;
        break;
      case "/":
        resultadoCalculado = primeiroNumero / segundoNumero;
        break;
      default:
        resultadoCalculado = 0;
    }

      const operacaoHistorico = `${primeiroNumero} ${operacao} ${segundoNumero} = ${resultadoCalculado}`;
      
      
      return { operacaoHistorico, resultadoCalculado };
     
    
     
}

export default calcularResultado