import { useState } from "react"
export const Contador5 = () => {
const[valor,setValor]=useState(5);
const contador=(num:number)=>{
    setValor(valor+num)
}
  return (
    <div style={{ textAlign: 'center', border: '2px solid #333', padding: '10px', width: 'fit-content', margin: '20px auto' }}>
    <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Contador <small>{valor}</small></h3>
    <button className="btn btn-primary" onClick={() => contador(5)}>+5</button>
    &nbsp;
    &nbsp;
    <button className="btn btn-primary" onClick={() => contador(-5)}>-5</button>
</div>
  )
}
