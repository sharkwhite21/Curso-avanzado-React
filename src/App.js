import React from 'react'
import { ListOfCategories } from './components/ListOfCategorys.js'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ListOfPhotocards } from './components/ListOfPhotoCards/index.js'
import { Logo } from './components/Logo/index.js'

export const App = () => (
  <>
    <Logo />
    <ListOfCategories />
    <GlobalStyle />
    <ListOfPhotocards />
  </>
)
