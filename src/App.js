import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategorys.js'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ListOfPhotocards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo/index.js'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery.js'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')
  console.log(detailID)
  return (
   <>
     <GlobalStyle />
     <Logo />
     {
       detailID ? <PhotoCardWithQuery id={detailID} /> : <Fragment>
         <ListOfCategories />
         <ListOfPhotocards categoryId={1} />
       </Fragment>
     }

 </>
  )
}
