import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
  query {
    danoneEcoAndHealthyCollection {
      items {
        product
      }
    }
  }
`

export const HERO_QUERY = gql`
  query {
    danoneEcoAndHealthyCollection {
      items {
        homepageTitle
        homepageDescription
        homepageButton
        image {
          title
          description
          url
        }
      }
    }
  }
`