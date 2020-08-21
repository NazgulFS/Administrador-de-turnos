import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Turno from './components/Turno';

function App() {

  // Arreglo de turnoS
  const [turnos, guardarTurnos] = useState([]);

  // Función que tome los turnos actuale y agregue los nuevos
  const crearTurno = turno => {
    guardarTurnos([
      ...turnos,
      turno
    ]);
  }

  // Funcion que elimina un turno por su id
  const eliminarTurno = id => {
    const nuevosTurnos = turnos.filter(turno => turno.id !== id);
    guardarTurnos(nuevosTurnos);
  }

  // Mensaje condicional 
  const titulo = turnos.length === 0 ? <h3 className="admTurnos">No hay turnos reservados</h3> :<h3 className="admTurnos">Administra tus turnos</h3>

  return (
    <Fragment>
      <Container>
      <Row>
        <Col>
          <Formulario 
            crearTurno={crearTurno}
          />
        </Col>
        <Col>
          <h3>{titulo}</h3>
          {turnos.map(turno => (
            <Turno 
              key={turno.id}
              turno={turno}
              eliminarTurno={eliminarTurno}
            />
          ))}
        </Col>
      </Row>
      </Container>
    </Fragment>
  );
}

export default App;
