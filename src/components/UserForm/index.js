import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Input, Form, Button, Title } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.prevendDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title > { title }</Title>
        <Input disabled={disabled} placeholder='Email' {...email}
        />
        <Input disabled={disabled} placeholder='Password' type='password' {...password}
        />
        <Button disabled={disabled} >{ title }</Button>
      </Form>
      {error && <Error>{error}</Error> }
    </>
  )
}
