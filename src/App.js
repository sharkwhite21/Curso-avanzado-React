import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { Logo } from './components/Logo/index.js'
import { Home } from './pages/home.js'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail.js'
import { NavBar } from './components/NavBar/index.js'

export const App = () => {
  return (
   <>
     <GlobalStyle />
     <Logo />
     <Router>
       <Home path='/' />
       <Home path='/pet/:id' />
       <Detail path='/detail/:detailID' />
     </Router>
     <NavBar />

 </>
  )
}
