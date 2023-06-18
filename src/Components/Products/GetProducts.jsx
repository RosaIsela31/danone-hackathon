import React, { useState } from "react";
import { useQuery } from '@apollo/client'
import { PRODUCTS_QUERY } from '../../GraphQL/Queries'
import Modal from "../Modal";

import './styles.css'

const GetProducts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  const { error, loading, data } = useQuery(PRODUCTS_QUERY)

  const products = data?.danoneEcoAndHealthyCollection?.items[0].product

  const handleOpenModal = (item) => {
    setProductInfo(item)
    setIsOpen(true)
  }
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div className="container">
        {isOpen && (
          <div className="card-modal-wrapper">
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <div className="product-modal">
                <div className="product-modal-img-wrapper">
                  <p className="product-name product-name-modal">{productInfo.name}</p>
                  <img className="product-img-modal" src={productInfo.image.uri} alt={productInfo.alt} />
                </div>
                <div className="product-info-modal">
                  <p>{`ingredients: ${productInfo.ingredients}`}</p> <br />
                  <p>{`Kcal: ${productInfo.kcal}`}</p>
                  <p>{`carbohydrates: ${productInfo.carbohydrates}`}</p>
                  <p>{`eco: ${productInfo.eco}`}</p>
                  <p>{`grasas: ${productInfo.grasas}`}</p>
                  <p>{`nutri score: ${productInfo.nutriscore}`}</p>
                </div>
              </div>
            </Modal>
          </div>
        )}
        <div className="product-list">
          {products.map(product => {
            console.log('product', product)
            return (
              <div className="card" data-cy='Button' onClick={() => handleOpenModal(product)}>
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
