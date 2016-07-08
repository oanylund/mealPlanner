import React, { PropTypes } from 'react'
import EditIngredItem from './EditIngredItem.jsx'

const EditIngredsList = (props) => {
  const ingredList = props.ingreds.map( (ingred, i) => {
    return <EditIngredItem key={i} quantity={ingred.quantity}
            ingId={ingred.ingredientId} index={i}
            editQuantity={props.editQuantity}
            deleteIngred={props.deleteIngred}
            moveIngredUp={props.moveIngredUp}
            moveIngredDown={props.moveIngredDown}
            moveIngred={props.moveIngred}
           />;
  });

  return (
    <div className='addDinner-IngredList'>{ingredList}</div>
  )
}

export default EditIngredsList
