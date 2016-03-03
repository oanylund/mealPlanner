import React, { PropTypes } from 'react'
import { Button, Col, Alert } from 'react-bootstrap'
import AddIngredSearch from './AddIngredSearch.jsx'
import ShowIngredsAdded from './ShowIngredsAdded.jsx'

class AddIngredient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      selectedIngredient: null,
      ingredientQuantity: 1,
      showAddForm: false
    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.onSelectVal = this.onSelectVal.bind(this)
    this.showAddForm = this.showAddForm.bind(this)
    this._resetForm = this._resetForm.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }
  onQuantityChange() {
    let newQuantity = +this.refs.quantity.value
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
        this.refs.addIngredBtn.focus()
      }
    })
  }
  showAddForm() {
    this.setState({
      showAddForm: true
    }, () => {
      this.refs.quantity.focus()
      this.refs.quantity.select()
    })
  }
  _resetForm() {
    this.setState({
      searchQuery: '',
      selectedIngredient: null,
      ingredientQuantity: 1,
      showAddForm: false
    }, () => {
      if( !!this.refs.showAddIngredFormBtn ) {
        this.refs.showAddIngredFormBtn.focus()
      }
    })
  }
  onAdd() {
    const ingredObj = Object.assign(this.state.selectedIngredient, { quantity: this.state.ingredientQuantity })
    this.props.addIngredient(ingredObj)
    this._resetForm()
  }
  render () {
    const valSelected = !!this.state.selectedIngredient;
    const plural = (this.state.ingredientQuantity > 1);
    if ( valSelected ) {
      var showUnit = plural ? this.state.selectedIngredient.unit.plural :
      this.state.selectedIngredient.unit.singular;
    }

    const showIngredsComponent = <ShowIngredsAdded
                                  ingreds={this.props.dinnerObj.ingredients}
                                  editQuantity={this.props.editIngredientQuantity}
                                  deleteIngred={this.props.deleteIngredient}
                                  moveIngred={this.props.moveIngredient}
                                  moveIngredUp={this.props.moveIngredientUp}
                                  moveIngredDown={this.props.moveIngredientDown}
                                 />
    const ingredsInStore = this.props.dinnerObj.ingredients.length;
    const alertEmpty = ( <Alert bsStyle='info'><p>Trykk + knappen for å legge til ingredienser</p></Alert> );
    const showIngreds = ingredsInStore === 0 ? alertEmpty : showIngredsComponent;

    const form = (
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
    );

    const btn = (
        <button ref='showAddIngredFormBtn' type='button'
          className='btn btn-primary btn-block btn-xs' onClick={this.showAddForm}>
          <i className='fa fa-plus'/>
        </button>
    );

    return (
      <fieldset className={this.props.showIngredient}>
        <legend>Legg til ingredienser</legend>
        {showIngreds}
        { this.state.showAddForm ? form : btn }
      </fieldset>
    )
  }
}

export default AddIngredient;
