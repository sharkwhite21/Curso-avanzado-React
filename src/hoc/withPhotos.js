import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// componentes de orden superior es lo que tenemos en la parte inferior.
export const withPhotos = graphql(gql`
query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
