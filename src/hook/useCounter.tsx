import { useState } from "react";


export const useCounter = (inicial:number) => {
    const[valor,setValor]=useState(inicial);

    const contador=(num:number)=>{
        setValor(valor+num)
    }

    return{
        valor,
     contador,
    }
       
    
}
