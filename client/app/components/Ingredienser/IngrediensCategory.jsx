import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import IngredsInCat from '../../composers/IngredsInCat'
import { Col } from 'react-bootstrap'
import IngredBox from './IngrediensBox.jsx'
import IngredHeader from './IngrediensHeader.jsx'

const IngredCategory = ({category, catOptions, IngredsInCat}) => {
  const ingredients = IngredsInCat.map( (ingredient,i) => {
    return (
        <IngredBox key={`ING${i}`} catOptions={catOptions} ingredient={ingredient} />
    )
  })
  return (
    <Col md={12}>
      <IngredHeader title={category.name} id={category._id} ingredsInCat={IngredsInCat.length} />
      {ingredients}
    </Col>
  )
}

export default composeWithTracker(IngredsInCat)(IngredCategory)
