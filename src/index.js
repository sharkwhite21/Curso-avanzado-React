import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://petgram-server-marlon-sharkwhite21.vercel.app/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app')
)
