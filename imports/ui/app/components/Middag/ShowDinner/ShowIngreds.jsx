import React, { PropTypes } from 'react'
import ShowIngredItem from './ShowIngredItem.jsx'
import EditIngredients from './EditMode/EditIngredients.jsx'

const ViewIngreds = ({ingredients}) => {
  const ingreds = ingredients.map( (ingredient, i) => {
    const ingId = ingredient.ingredientId;
    const quantity = ingredient.quantity;
    return <ShowIngredItem quantity={quantity} ingId={ingId} key={i}  />
  });
  return (
    <div className='showDinner-Ingreds'>
      <h4>Ingredienser:</h4>
      <ul className='showDinner-IngredList'>
        {ingreds}
      </ul>
    </div>
  )
}

const ShowIngreds = ({ editMode, ingredients, dinnerId }) => {
  if( editMode ) {
    return (
      <EditIngredients dinnerId={dinnerId} ingredients={ingredients} />
    )
  }
  else {
    return <ViewIngreds ingredients={ingredients} />;
  }
}

export default ShowIngreds
