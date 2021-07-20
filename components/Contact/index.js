import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import axios from 'axios'

import {
  Container,
  Title,
  Form,
  Email,
  Sections,
  Label,
  Text,
  Button,
  Message
} from './styles'

export const Contact = () => {
  const formId = 'aEAE3VtM';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: '',
    name: '',
    message: ''
  }
  
  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState()

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState
    }

    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
      setMessage('Enviado correctamente.')
    } catch (error) {
      console,log(error)
      setMessage('Algo ocurrió mal, intente de nuevo.')
    }
  }

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState)
  }

  return (
    <Scroll.Element name='contact'>

      <Container>
        <Title>Contáctanos</Title>
        <Form onSubmit={submitForm}>
          <Sections>
            <Label htmlFor='email'>Email</Label>
            <Email
              placeholder='Correo electrónico'
              type='email'
              id='email'
              value={formState.email}
              onChange={updateFormControl}
              />
          </Sections>
          <Sections>
            <Label htmlFor='name'>Nombre</Label>
            <Email
              placeholder='Nombre'
              type='text'
              id='name'
              value={formState.name}
              onChange={updateFormControl}
              />
          </Sections>
          <Sections>
            <Label htmlFor='message'>Message</Label>
            <Text
              placeholder='Comentario'
              type='text'
              id='message'
              value={formState.message}
              onChange={updateFormControl}
              />
          </Sections>
          {message &&
            <Message>{message}</Message>
          }
          <Button disabled={submitting} type='submit'>
            {
              submitting ? 'Enviando...' : 'Enviar'
            }
          </Button>
          </Form>
      </Container>

    </Scroll.Element>
  )
}
