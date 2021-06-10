import React from 'react'
import {
  Container,
  Text,
  Title,
  DescText
} from './styles'

export const Description = () => {
  return (
    <Container>
      <Text>
        <Title>Dessarrollo del juego</Title>
        <DescText>
        El contenido de este juego fue desarrollado como parte de una tesis de doctorado, en donde se utilizó la metodología de Design Thinking con el propósito de solucionar el problema a través de ideas innovadoras y una implementación de un sistema basado en lógica difusa para su proceso de evaluación con base en el tiempo de respuesta y los aciertos de los problemas que conforman el juego. 
        <br />
        <br />
        <br />
        Asimismo, la Facultad de Ingeniería Mecánica y Eléctrica de la Universidad Autónoma de Nuevo León a través de su Fábrica de Software y el asesoramiento de la Dra. Aída Lucina González Lara han desarrollado una aplicación para dispositivos Android cuyo propósito es fortalecer el razonamiento lógico-matemático a estudiantes de nivel medio superior y superior por medio de problemas matemáticos realizados por un grupo de expertos en el área con base en la guía del área de matemáticas del EXANI-II (Examen Nacional de Ingreso a la Educación Superior, CENEVAL). 
        </DescText>
      </Text>
    </Container>
  )
}
