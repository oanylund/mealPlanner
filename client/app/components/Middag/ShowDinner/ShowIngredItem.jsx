import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GetDinnerIngred from '../../../composers/GetDinnerIngred'

const ShowIngredItem = ({ quantity, ingredient }) => {
  const singularIng = ingredient.name.singular || ingredient.name.plural;
  const pluralIng = ingredient.name.plural || ingredient.name.singular;
  const IngName = quantity > 1 ? pluralIng : singularIng;

  const singularUnit = ingredient.unit.singular || ingredient.unit.plural;
  const pluralUnit = ingredient.unit.plural || ingredient.unit.singular;
  const UnitName = quantity > 1 ? pluralUnit : singularUnit;

  return (
    <li>{`${quantity} ${UnitName} ${IngName}`}</li>
  )
}

export default composeWithTracker(GetDinnerIngred)(ShowIngredItem)
