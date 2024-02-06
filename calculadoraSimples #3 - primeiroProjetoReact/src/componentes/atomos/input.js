
// label>
// Primeiro Numero
        //  <input  value = {primeiroNumero} onChange={e => setPrimeiroNumero(Number(e.target.value))}/>    
        // </label>
        const Input = (props) => {
            return (
               <label>
       {props.titulo}
                <input  value = {props.numero} onChange={e => {props.set(Number(e.target.value))}}/>    
               </label>
            )
       }
       
       export default Input