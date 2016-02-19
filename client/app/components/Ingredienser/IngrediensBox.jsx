import React, { PropTypes } from 'react'

class IngrediensBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const ingredient = this.props.ingredient
    return (
      <div className='ingrediensBox'>
        <div className='ingrediensBox-Name'>{ingredient.name.singular}</div>
        <div className='ingrediensBox-Unit'>{ingredient.unit.singular}</div>
      </div>
    )
  }
}

export default IngrediensBox;
