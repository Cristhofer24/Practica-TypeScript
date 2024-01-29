
import React, { useState } from 'react';
import { AreaCuadrado } from './Tarea/AreaCuadrado';
import { Array } from './Tarea/Array';
import { ArregloReversa } from './Tarea/ArregloReversa';
import Calificaciones from './Tarea/Alumnos';
import { Contador5 } from './Tarea/Contador5';

const APP = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const handleOptionClick = (opcion: string) => {
        setOpcionSeleccionada(opcion);
    };

    const renderizarComponente = () => {
        switch (opcionSeleccionada) {
            case 'AreaCuadrado':
                return <AreaCuadrado />;
            case 'Array':
                return <Array />;
            case 'ArregloReversa':
                return <ArregloReversa />;
            case 'Calificaciones':
                return <Calificaciones />;
            case 'Contador5':
                return <Contador5 />;
            default:
                return null;
        }
    };

    return (
        <div className="mt-2">
            <h1>Introducción a TS con React</h1>
            <hr />
            <div>
                <h3>Menú de opciones</h3>
                <ul>
                    <button className='btn btn-primary' onClick={() => handleOptionClick('AreaCuadrado')}>AreaCuadrado</button><br /> <br />
                    <button className='btn btn-primary' onClick={() => handleOptionClick('Array')}>Array</button><br />  <br />
                    <button className='btn btn-primary' onClick={() => handleOptionClick('ArregloReversa')}>ArregloReversa</button><br /> <br />
                    <button className='btn btn-primary' onClick={() => handleOptionClick('Calificaciones')}>Calificaciones</button><br /> <br />
                    <button className='btn btn-primary' onClick={() => handleOptionClick('Contador5')}>Contador5</button><br /> <br />
                </ul>
            </div>
            <div>
                {renderizarComponente()}
            </div>
        </div>
    );
}

export default APP;
