import React, { Fragment, useState } from 'react';
import { Form, Button, Alert, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../styles/formulario.css'

const Formulario = ({crearTurno}) => {
    // Crear State de turno
    const [turno, actualizarTurno] = useState({
        paciente: '',
        especialidad: '',
        oSocial: '',
        numSocial: '',
        sintomas: '',
        fecha: '',
        hora: '',
    });

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarTurno({
            ...turno,
            [e.target.name]: e.target.value
        });
    }

    const [error, actualizarError] = useState(false);

    // Extraer valores
    const {paciente, especialidad, oSocial, numSocial, sintomas, fecha, hora} = turno;

    // Enviar formulario de turno
    const guardarTurno = e => { 
        e.preventDefault();
        // Validar Formulario
        if(paciente.trim() === '' || especialidad.trim() === '' || oSocial.trim() === '' || numSocial.trim() === '' || sintomas.trim() === '' || fecha.trim() === '' || hora.trim() === ''){
            actualizarError(true);
            return;
        }

        // Eliminar contenido previo
        actualizarError(false)

        // Asignar ID
        turno.id = uuidv4();

        // Crear el turno
        crearTurno(turno);

        // Reiniciar el Formulario
        actualizarTurno({
            paciente: '',
            especialidad: '',
            oSocial: '',
            numSocial: '',
            sintomas: '',
            fecha: '',
            hora: '',
        });

    }

    return ( 
        <Fragment>           
            { error ?<Alert variant="danger">Todos los campos son obligatorios</Alert>  :null}
            <h3 className="formTitle">Formulario de Turno</h3>
            <Form
                onSubmit={guardarTurno}
            >
                <Form.Group>
                    <Form.Label>Nombre del paciente</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="paciente"
                        onChange={actualizarState}
                        value={paciente}
                        placeholder="Ingrese el nombre del paciente" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Especialidad</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text" 
                        name="especialidad"
                        onChange={actualizarState}
                        value={especialidad}
                        placeholder="Ingrese la especialidad médica" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Obra Social</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="oSocial"
                        onChange={actualizarState}
                        value={oSocial}
                        placeholder="Nombre de obra social" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Numero de obra social</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="numSocial"
                        onChange={actualizarState}
                        value={numSocial}
                        placeholder="Número de obra social" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                        placeholder="Síntomas del paciente" />
                </Form.Group>
                <Form.Row>
                    <Col xs={7}>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                        size="sm"
                        type="date"
                        name="fecha"
                        value={fecha}
                        onChange={actualizarState}
                    />
                    </Col>
                    <Col>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                        size="sm"
                        type="time"
                        name="hora"
                        value={hora}
                        onChange={actualizarState}
                    />
                    </Col>
                </Form.Row>
                <Button type="submit" variant="primary" size="sm">Reservar Turno</Button>
            </Form>
        </Fragment>
     );
}
 
export default Formulario;