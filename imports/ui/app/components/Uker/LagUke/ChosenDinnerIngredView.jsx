import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import GetDinnerIngred from '../../../composers/GetDinnerIngred'

const ChosenDinnerIngredView = ({ quantity, ingredient }) => {
  const singularIng = ingredient.name.singular || ingredient.name.plural;
  const pluralIng = ingredient.name.plural || ingredient.name.singular;
  const IngName = quantity > 1 ? pluralIng : singularIng;

  const singularUnit = ingredient.unit.singular || ingredient.unit.plural;
  const pluralUnit = ingredient.unit.plural || ingredient.unit.singular;
  const UnitName = quantity > 1 ? pluralUnit : singularUnit;

  return (
    <ListGroupItem>{`${quantity} ${UnitName} ${IngName}`}</ListGroupItem>
  )
}

export default composeWithTracker(GetDinnerIngred)(ChosenDinnerIngredView);
