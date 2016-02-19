import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import IngredsInCat from '../../../composers/IngredsInCat'
import { Badge } from 'react-bootstrap'

const IngredCategory = ({category, IngredsInCat}) => {
  const ingredients = IngredsInCat.map( (ingredient) => {
    return (
      <p>{ingredient.name.singular}</p>
    )
  })
  return (
    <div>
      <h2>{category.name} <Badge>{IngredsInCat.length}</Badge></h2>
      {ingredients}
    </div>
  )
}

export default composeWithTracker(IngredsInCat)(IngredCategory)
