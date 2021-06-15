import React from 'react';
import {
  Container,
  Info,
  Name
} from './styles';

export const TesisComponent = () => {
  return(
    <Container>
      <Info>
        <h2>Tésis</h2>
        <br/>

        <Name>Este juego fue desarrollado como parte de una tesis del Doctorado en Ingeniería con Orientación en Tecnologías de la Información con apoyo de un equipo de estudiantes de la Fábrica de Software aplicando la metodología Design Thinking.</Name>
        <br/>
        <br/>
        <h3>Responsables del proyecto</h3>
        <br/>
        <Name>Dra. Alicia Yesenia López Sánchez </Name>
        <Name>Dra. Aída Lucina González Lara <a href='mailto:aida.gonzalezlr@uanl.edu.mx'>aida.gonzalezlr@uanl.edu.mx</a> </Name>
        <br/>
        <br/>
        <Name>Ramiro Antonio Chacón De León</Name>
        <Name>Esmeralda Patricia Garza Reyes</Name>
        <Name>Ángel Javier Cruz Solórzano</Name>
      </Info>
    </Container>
  )
}
