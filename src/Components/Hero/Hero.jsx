import React from "react";
import { useQuery, gql } from '@apollo/client'
import { HERO_QUERY } from '../../GraphQL/Queries'
import Button from '../Button'
import './styles.css'

const Hero = () => {

  const { error, loading, data } = useQuery(HERO_QUERY)

  const normalizeData = data?.danoneEcoAndHealthyCollection.items[0]

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${normalizeData.image.url})` }}>
        <div className="container hero-content">
          <h1>{normalizeData.homepageTitle}</h1>
          <p className="hero-description">{normalizeData.homepageDescription}</p>
          <Button to="/diary">{normalizeData.homepageButton}</Button>
        </div>
      </div>

    </div>
  )
}

export default Hero;
