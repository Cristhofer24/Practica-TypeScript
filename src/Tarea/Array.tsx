import React, { useState } from 'react';

const calcularSumaArreglo = (arreglo: number[]): number => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

export const Array = () => {
    const [parametros, setParametros] = useState<string>('');
    const [resultado, setResultado] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParametros(event.target.value);
    }

    const calcularSuma = () => {
        const numeros = parametros.split(',').map(Number);
        const suma = calcularSumaArreglo(numeros);
        setResultado(suma);
    }

    return (
        <div>
            <h2>Arreglos</h2>
            <label>Ingrese los parámetros separados por comas:</label><br />
            <input type="text" onChange={handleInputChange} value={parametros} /><br />
            <button className="btn btn-primary mt-3" onClick={calcularSuma}>Calcular Suma</button><br />
            {resultado !== 0 && <p>La suma de los elementos del arreglo es: {resultado}</p>}
        </div>
    );
}
