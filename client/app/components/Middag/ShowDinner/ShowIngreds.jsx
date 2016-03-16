import React, { PropTypes } from 'react'
import ShowIngredItem from './ShowIngredItem.jsx'

const ShowIngreds = ({ingredients}) => {
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

export default ShowIngreds
