import React, { PropTypes } from 'react'
import {composeWithTracker} from 'react-komposer';

function composer(props, onData) {
  const handle = Meteor.subscribe('ingrediensKat')
  if (handle.ready()) {
    const categories = IngrediensKat.find({}, {sort: {_id: 1}}).fetch()
    onData(null, {categories})
  };
};

const IngKatList = (props) => {
  debugger
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
