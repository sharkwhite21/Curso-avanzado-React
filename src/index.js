import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from '@apollo/client'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-marlon-sharkwhite21.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(

  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
