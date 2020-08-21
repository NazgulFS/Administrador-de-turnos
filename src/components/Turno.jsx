import React from 'react'
import { Button } from 'react-bootstrap';
import '../styles/turno.css'

const Turno = ({turno, eliminarTurno}) => (
    <div className="turno">
        <p>Paciente: <span>{turno.paciente}</span></p>
        <p>Especialidad: <span>{turno.especialidad}</span></p>
        <p>Obra Social: <span>{turno.oSocial}</span></p>
        <p>Numero de obra social: <span>{turno.numSocial}</span></p>
        <p>Sintomas: <span>{turno.sintomas}</span></p>
        <p>Fecha: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <Button
            variant="danger"
            onClick= {() => eliminarTurno(turno.id)}
        >Eliminar &times;</Button>
    </div>
)
 
export default Turno;