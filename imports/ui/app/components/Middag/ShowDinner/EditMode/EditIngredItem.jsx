import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GetDinnerIngred from '../../../../composers/GetDinnerIngred'
import AddedIngredItem from '../../LagMiddag/AddedIngredItem.jsx'

const EditIngredItem = (props) => {
  const ingredientWithQuantity = Object.assign({ quantity: props.quantity }, props.ingredient);
  return (
    <AddedIngredItem
              ingred={ingredientWithQuantity} index={props.index}
              editQuantity={props.editQuantity}
              deleteIngred={props.deleteIngred}
              moveIngredUp={props.moveIngredUp}
              moveIngredDown={props.moveIngredDown}
              moveIngred={props.moveIngred}
    />
  )
}

export default composeWithTracker(GetDinnerIngred)(EditIngredItem);
