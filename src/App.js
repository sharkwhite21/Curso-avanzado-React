import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { Logo } from './components/Logo/index.js'
import { Home } from './pages/home.js'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail.js'
import { User } from './pages/User.js'
import { Favs } from './pages/Fav.js'
import { NotRegistereUser } from './pages/NotRegisteredUser.js'
import { NavBar } from './components/NavBar/index.js'
import Context from './Context.js'

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
     <Context.Consumer>
       {
         ({ isAuth }) =>
           isAuth
             ? <Router>
               <Favs path='/favs' />
               <User path='/user' />
             </Router>
             : <Router>
               <NotRegistereUser path='/favs' />
               <NotRegistereUser path='/user' />
             </Router>
       }
     </Context.Consumer>

     <NavBar />

 </>
  )
}
