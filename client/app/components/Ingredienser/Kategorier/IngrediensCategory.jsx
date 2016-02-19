import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import IngredsInCat from '../../../composers/IngredsInCat'
import { Col, Badge } from 'react-bootstrap'

const IngredCategory = ({category, IngredsInCat}) => {
  const ingredients = IngredsInCat.map( (ingredient) => {
    return (
        <p>{ingredient.name.singular}</p>
    )
  })
  return (
    <Col md={12}>
      <h3>{category.name} <Badge>{IngredsInCat.length}</Badge></h3>
      {ingredients}
    </Col>
  )
}

export default composeWithTracker(IngredsInCat)(IngredCategory)
