import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategorys.js'
import { ListOfPhotocards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotocards categoryId={id} />
    </Fragment>
  )
}
