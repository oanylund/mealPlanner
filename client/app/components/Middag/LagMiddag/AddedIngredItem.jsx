import React, { PropTypes } from 'react'

const AddedIngredItem = ({ingred}) => {

  const unitShown = ingred.quantity > 1 ? ingred.unit.plural : ingred.unit.singular
  const nameShown = ingred.quantity > 1 ? ingred.name.plural : ingred.name.singular

  return (
    <div>
    <span className='addDinner-IngredItemQuantity'>{ingred.quantity}</span>
    <span className='addDinner-IngredItemUnit'>{unitShown}</span>
    <span className='addDinner-IngredItemName'>{nameShown}</span>
    <span><i className='fa fa-close' /></span>
    </div>
  )
}

export default AddedIngredItem
