import React, { PropTypes } from 'react'
import {composeWithTracker} from 'react-komposer';
import composer from '../../../composers/IngredCats'


const IngKatList = (props) => {
  categories = props.categories
  const categoryList = categories.map( (category) => {
    return(
      <p>{category.name}</p>
    )
  })

  return (
    <div>{categoryList}</div>
  )
}

export default composeWithTracker(composer)(IngKatList)
