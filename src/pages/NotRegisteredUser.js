import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegistereUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
        <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                const errorMsg = error && 'E usuario ya existe'

                return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
        </>
        )
      }
    }
  </Context.Consumer>
)
