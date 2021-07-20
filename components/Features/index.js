import React from 'react'
import {
  Container,
  Grid,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  ImageContainer,
  Text
} from './styles'

export const Features = () => {
  return (
    <Container>
      <Grid>

        <FirstContainer>
          <ImageContainer>
            <img src={'SelloTierra.png'} height='100px' width='100px' />
          </ImageContainer>
          <h3>Agrupadas</h3>
          <Text>Los problemas están agrupados dependiendo del tema en el que se encuentre el usuario. </Text>
        </FirstContainer>

        <SecondContainer>
          <ImageContainer>
            <img src={'androidLogo.png'} height='100px' width='100px' />
          </ImageContainer>
          <h3>Dispositivos Android</h3>
          <Text>Se puede utilizar de manera individual para tabletas o teléfonos inteligentes cuyo sistema operativo sea Android. </Text>
        </SecondContainer>

        <ThirdContainer>
          <ImageContainer>
            <img src={'Reint-Agua.png'} height='100px' width='100px' />
          </ImageContainer>
          <h3>Aleatoriedad</h3>
          <Text>Aunque el usuario puede volver a intentar los problemas, estos y sus opciones de respuestas se muestran en orden aleatorio. </Text>
        </ThirdContainer>

        <FourthContainer>
          <ImageContainer>
            <img src={'loading.png'} height='100px' width='auto' />
          </ImageContainer>
          <h3>Distinas Áreas</h3>
          <Text>Actualmente cuenta con 3 áreas: razonamiento aritmético, algebraico, estadístico y probabilístico.</Text>
        </FourthContainer>

      </Grid>
    </Container>
  )
}
