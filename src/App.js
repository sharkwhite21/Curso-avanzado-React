import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategorys.js'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ListOfPhotocards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo/index.js'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')
  return (
   <>
     <GlobalStyle />
     <Logo />
     {
       detailID ? <h1> Detail Id</h1> : <Fragment>
         <ListOfCategories />
         <ListOfPhotocards categoryId={1} />
       </Fragment>
     }

 </>
  )
}
