import React, { useState } from "react";

export const AreaCuadrado = () => {
    const [lado, setLado] = useState(0);
    const [area, setArea] = useState(0);

    const calculaArea = () => {
        const areaCalculada = lado * lado;
        setArea(areaCalculada);
    }

    const ingresoTeclado = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLado(Number(event.target.value));
    }

    return (
        <div>
            <h2>Área de un Cuadrado</h2>
            <label>Ingrese la medida de uno de los lados:</label><br />
            <input type="text" onChange={ingresoTeclado } /><br />
            <button className="btn btn-primary mt-5" onClick={calculaArea}>Calcular</button><br />
            <p>El área del cuadrado es: {area}</p>
        </div>
    )
}
