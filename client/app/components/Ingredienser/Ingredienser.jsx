import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import Catrender from './Kategorier/IngrediensCategory.jsx'
import IngredCats from '../../composers/IngredCats'

class Ingredienser extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const categories = this.props.categories.map( (category) => {
      return (
        <Catrender category={category}/>
      )
    })
    return (
      <div className='marginSquare'>{categories}</div>
    )
  }
}

export default composeWithTracker(IngredCats)(Ingredienser)
