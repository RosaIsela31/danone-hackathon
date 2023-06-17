import React, { useEffect } from "react";
import { useQuery, gql } from '@apollo/client'
import { PRODUCTS_QUERY } from '../../GraphQL/Queries'

import './styles.css'

const GetProducts = () => {

  const { error, loading, data } = useQuery(PRODUCTS_QUERY)
  // console.log('data', data)

  const products = data?.danoneEcoAndHealthyCollection?.items[0].product

  // console.log('products', products)

  
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div className="container">
        <div className="product-list">
          {products.map(product => {
            console.log('product', product)
            return (
              <div className="card">
                <img className="product-img" src={product.image.uri} alt={product.alt} />
                <p className="product-name">{product.name}</p>
                <p>{`Kcal: ${product.kcal}`}</p>
                <p>{`ingredients: ${product.ingredients}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default GetProducts;