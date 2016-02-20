import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import IngredsInCat from '../../composers/IngredsInCat'
import { Col, Badge } from 'react-bootstrap'
import IngredBox from './IngrediensBox.jsx'

const IngredCategory = ({category, catOptions, IngredsInCat}) => {
  const ingredients = IngredsInCat.map( (ingredient,i) => {
    return (
        <IngredBox key={`ING${i}`} catOptions={catOptions} ingredient={ingredient} />
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
