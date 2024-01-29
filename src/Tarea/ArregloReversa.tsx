

export const ArregloReversa = () => {
    const arregloOriginal: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    // Función para dividir los valores del arreglo por 5
    const arregloDividido: number[] = arregloOriginal.map(valor => valor / 5);

    return (
        <div>
            <h3>El arreglo Original es</h3>
            <p>{JSON.stringify(arregloOriginal)}</p>
            <h3>El arreglo dividido para 5 es</h3>
            <p>{JSON.stringify(arregloDividido)}</p>
        </div>
    )
}
