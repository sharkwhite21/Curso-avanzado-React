import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// componentes de orden superior es lo que tenemos en la parte inferior.

const withPhotos = graphql(gql`
  query getPhotos {
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotocardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(id => <PhotoCard key={photos.id} {...photos} />)}
    </ul>
  )
}

export const ListOfPhotocards = withPhotos(ListOfPhotocardsComponent)
