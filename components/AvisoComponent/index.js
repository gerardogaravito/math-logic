import React from 'react';
import {
  Container,
  Info,
  Name
} from './styles';

export const AvisoComponent = () => {
  return(
    <Container>
      <Info>
        <h2>Política de Privacidad</h2>
        <br/>

        <Name>
          Math Logic es una aplicación gratuita, por lo que no tiene ningún costo este servicio. Esta página es solo para informar a los usuarios sobre las políticas y uso de la información personal del juego.
        <br />
        <br />
          Si acepta instalar la aplicación, entonces acepta la recopilación de información solamente con fines de mejorar o modificar el juego. Dicha información no se compartirá con nadie excepto con los diseñadores y desarrolladores de este proyecto.
        </Name>
        <br/>
        <br/>
        <h3>Uso y colección de información</h3>
        <br/>
        <Name>
          Con el propósito de mejorar la calidad del servicio, usted puede escribirnos acerca de algún disgusto o mala experiencia con el juego. Toda información será analizada por el equipo de trabajo y no se divulgará por ningún motivo a personas externas del proyecto.
        </Name>
        <br/>
        <br/>
        <h3>Cookies</h3>
        <br/>
        <Name>
          La aplicación no utiliza las cookies del usuario almacenadas en su navegador, así como tampoco código de terceros para obtener la información.
        </Name>
        <br/>
        <br/>
        <h3>Proveedores de Servicio</h3>
        <br/>
        <Name>
          Esta aplicación no utiliza proveedores de servicios de terceros debido a que toda información se encuentra autocontenida por lo que no requiere el uso del internet.
        </Name>
        <br/>
        <br/>
        <h3>Links a otros sitios</h3>
        <br/>
        <Name>
          Este sitio no contiene links a otros sitios, solamente links internos en el mismo juego.
        </Name>
        <br/>
        <br/>
        <h3>Privacidad Infantil</h3>
        <br/>
        <Name>
          Debido a que esta aplicación no recolecta información personal, no existe posibilidad de recabar información a partir de menores de edad.
        </Name>
        <br/>
        <br/>
        <h3>Cambios en la política de privacidad</h3>
        <br/>
        <Name>
          Cualquier cambio importante en la funcionalidad de la aplicación podría conllevar una actualización a las políticas de privacidad, por lo que exhortamos a revisar dichos cambios para futuras versiones.
          <br />
          <br />
          Sin embargo, en caso de recolectar información, esta será utilizada con fines estadísticos para su análisis y estudio con el objetivo de mejorar el juego, sin hacer uso de los datos personales del usuario.
        </Name>
        <br/>
        <br/>
        <h3>¿Esta aplicación recolecta información en tiempo real sobre la ubicación del dispositivo?</h3>
        <br/>
        <Name>
          Esta aplicación NO recolecta información en tiempo real de la ubicación del dispositivo.
        </Name>
      </Info>
    </Container>
  )
}
