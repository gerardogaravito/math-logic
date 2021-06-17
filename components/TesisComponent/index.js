import React from 'react';
import {
  Container,
  Info,
  Name
} from './styles';

import { TesisPdf } from '@components/TesisPdf';
 
export const TesisComponent = () => {
  return(
    <Container>
      <Info>
        <h2>Tésis</h2>
        <br/>

        <h3>Nombre de la tesis:</h3>
        <br />
        <Name>DESARROLLO DE UN JUEGO SERIO PARA FORTALECER EL RAZONAMIENTO LÓGICO MATEMÁTICO CON IMPLEMENTACIÓN DE UN SISTEMA BASADO EN LÓGICA DIFUSA.</Name>
        <br/>
        <TesisPdf />
        <br/>
        <h3>Resumen</h3>
        <br/>
        <Name>Actualmente, contar con habilidades y métodos para la comprensión de información en el área de matemáticas es importante para la toma de decisiones, a pesar de que los estudiantes conocen los conceptos de las matemáticas, resulta ser que no saben cómo ni cuándo utilizarlos. Para resolver este problema, en este trabajo se presenta el desarrollo de un juego serio para fortalecer el razonamiento lógico-matemático con la implementación de un sistema basado en lógica difusa para el proceso de evaluación de los problemas, este desarrollo se realizó aplicando la metodología Design Thinking.</Name>
        <br />
        <Name>Para la primera etapa (Empatizar) se generó un grupo de enfoque y encuestas para conocer las necesidades de los estudiantes, en la segunda etapa (Definir) se definieron perfiles de usuario, un diagrama de interacción y de caso de uso, en la tercera etapa (Idear) se realizó una lluvia de ideas y un diagrama de afinidad, después en la cuarta etapa (Prototipar) se desarrolló la estructura del juego serio, un prototipo de baja fidelidad y uno de software dividido en el inicio de la aplicación, la creación de los problemas que conforman el juego con apoyo de expertos, el desarrollo del sistema de inferencia difusa y la recopilación de información para las variables con apoyo de un sitio web para finalmente implementarlo al juego, en la última etapa (Evaluar) se realizan pruebas de usabilidad y aprendizaje.</Name>
        <br />
        <Name>Como resultado se obtuvo la calificación y el tiempo en contestar de los usuarios con apoyo de dos evaluaciones (antes y después de usar el juego). Se llevó a cabo un análisis de los resultados obtenidos con base en el tiempo invertido en el juego serio, la cual indica que sí es posible fortalecer el razonamiento lógico-matemático por parte de los estudiantes que la utilizan.</Name>
      </Info>
    </Container>
  )
}
