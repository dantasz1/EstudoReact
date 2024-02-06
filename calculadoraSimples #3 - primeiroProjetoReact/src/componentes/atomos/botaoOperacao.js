
{/* <button onClick={() => setResultado(primeiroNumero + segundoNumero) } >+</button> */}
{/* <Botao calcular = {calcularResultado} numeroUm = { primeiroNumero} numeroDois = { segundoNumero}>+</Botao> */}
const Botao = (props) => {

    return (
        <button onClick={() => props.resultadoProps (props.children, props.numeroUm, props.numeroDois)}>{props.children}</button>
    
    )
    
    }
    
    export default Botao
