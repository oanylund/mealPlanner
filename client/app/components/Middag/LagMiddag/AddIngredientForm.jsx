import React, { PropTypes } from 'react'
import AddIngredSearch from './AddIngredSearch.jsx'

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      selectedIngredient: null,
      ingredientQuantity: 1
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onSelectVal = this.onSelectVal.bind(this);
    this._resetForm = this._resetForm.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.highlightQuantity = this.highlightQuantity.bind(this);
  }
  onQuantityChange() {
    let newQuantity = +this.refs.quantity.value;
    this.setState({
      ingredientQuantity: newQuantity
    })
  }
  onSearchChange(query) {
    this.setState({
      searchQuery: query
    })
  }
  onSelectVal(val) {
    this.setState({
      selectedIngredient: val
    }, () => {
      if( !!this.refs.addIngredBtn ) {
        this.refs.addIngredBtn.focus();
      }
    })
  }
  _resetForm() {
    this.setState({
      searchQuery: '',
      selectedIngredient: null,
      ingredientQuantity: 1
    }, () => {
      this.props.hideForm();
      if( !!this.refs.showAddIngredFormBtn ) {
        this.refs.showAddIngredFormBtn.focusBtn();
      }
    })
  }
  onAdd() {
    const ingredObj = Object.assign(this.state.selectedIngredient, { quantity: this.state.ingredientQuantity })
    this.props.addIngredient(ingredObj);
    this._resetForm();
  }
  highlightQuantity() {
    this.refs.quantity.focus()
    this.refs.quantity.select()
  }
  render () {
    const valSelected = !!this.state.selectedIngredient;
    const plural = (this.state.ingredientQuantity > 1);

    if ( valSelected ) {
      const singularUnit = this.state.selectedIngredient.unit.singular || this.state.selectedIngredient.unit.plural;
      const pluralUnit = this.state.selectedIngredient.unit.plural || this.state.selectedIngredient.unit.singular;
      var showUnit = plural ? pluralUnit : singularUnit;
    }

    return (
      <div className='addDinner-IngredRow'>
        <div className='addDinner-Antall'>
          <label className='control-label'>Antall</label>
          <input className='form-control' type='number' ref='quantity'
            min={1} max={9999} maxLength={4} size={4}
            onChange={this.onQuantityChange} value={this.state.ingredientQuantity}/>
        </div>
        { valSelected ? showUnit : <span>-</span> }
        <div className='addDinner-Ingred'>
          <label className='control-label'>Ingrediens</label>
          <AddIngredSearch query={this.state.searchQuery} searchChange={this.onSearchChange}
            valSelected={valSelected} plural={plural}
            selectVal={this.onSelectVal}
            />
        </div>
        { valSelected ? <input ref='addIngredBtn' onClick={this.onAdd} className='btn btn-primary addIngredBtn' type='button' value='Legg til'/> :
        <i onClick={this._resetForm} className='fa fa-close'/> }
      </div>
    )
  }
}

export default AddIngredientForm;
