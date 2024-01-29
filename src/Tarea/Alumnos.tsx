import React from 'react';

interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

const alumnos: Alumno[] = [
    {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];

const calcularPromedioCalificaciones = (alumnos: Alumno[]): number => {
    let sumaCalificaciones = 0;

    for (let i = 0; i < alumnos.length; i++) {
        sumaCalificaciones += alumnos[i].calificacion;
    }

    const promedio = sumaCalificaciones / alumnos.length;
    return promedio;
}

const Calificaciones: React.FC = () => {
    const promedioCalificaciones = calcularPromedioCalificaciones(alumnos);

    return (
        <div>
            <h3>Calificaciones</h3>
            {alumnos.map((alumno, index) => (
                <div key={index}>
                    <label>Nombre: {alumno.nombre}</label><br />
                    <label>Edad: {alumno.edad}</label><br />
                    <label>Calificación: {alumno.calificacion}</label><br /><br />
                </div>
            ))}
            <p>Promedio de Calificaciones: {promedioCalificaciones}</p>
        </div>
    );
}

export default Calificaciones;
