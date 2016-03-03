import React, { PropTypes } from 'react'

class AddIngredItem extends React.Component {
  constructor(props) {
    super(props)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.onDeleteIngred = this.onDeleteIngred.bind(this)
    this.onMoveUp = this.onMoveUp.bind(this)
    this.onMoveDown = this.onMoveDown.bind(this)
  }
  onQuantityChange(e) {
    const newQuantity = e.target.valueAsNumber

    if( newQuantity >= 1 && newQuantity <= 9999 ) {
      this.props.editQuantity({
        index: this.props.index,
        quantity: newQuantity
      })
    }
  }
  onDeleteIngred() {
    this.props.deleteIngred(this.props.index)
  }
  onMoveUp() {
    this.props.moveIngredUp(this.props.index)
  }
  onMoveDown() {
    this.props.moveIngredDown(this.props.index)
  }
  render () {
    const { ingred } = this.props
    const unitShown = ingred.quantity > 1 ? ingred.unit.plural : ingred.unit.singular
    const nameShown = ingred.quantity > 1 ? ingred.name.plural : ingred.name.singular

    return (
      <div>
        <input className='addDinner-IngredItemQuantity' value={this.props.ingred.quantity}
          type='number' min={1} max={9999} onChange={this.onQuantityChange} />
        <span className='addDinner-IngredItemUnit'>{unitShown}</span>
        <span className='addDinner-IngredItemName'>{nameShown}</span>
        <span className='addDinnerIngredItemMenu'>
          <i className='fa fa-close' onClick={this.onDeleteIngred} />
          <i className='fa fa-chevron-down' onClick={this.onMoveDown} />
          <i className='fa fa-chevron-up' onClick={this.onMoveUp} />
        </span>
      </div>
    )
  }
}

export default AddIngredItem;
