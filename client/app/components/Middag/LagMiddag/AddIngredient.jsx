import React, { PropTypes } from 'react'
import { Button, Col } from 'react-bootstrap'
import AddIngredSearch from './AddIngredSearch.jsx'


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
    this.onReset = this.onReset.bind(this)
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
    })
  }
  onReset() {
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
  render () {
    const valSelected = !!this.state.selectedIngredient;
    const plural = (this.state.ingredientQuantity > 1);
    if ( valSelected ) {
      var showUnit = plural ? this.state.selectedIngredient.unit.plural :
      this.state.selectedIngredient.unit.singular;
    }

    if( this.state.showAddForm ) {
      return (
        <Col sm={12}>
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
            { valSelected ? <input ref='addIngredBtn' onClick={this.onReset} className='btn btn-primary addIngredBtn' type='button' value='Legg til'/> :
              <i onClick={this.onReset} className='fa fa-close'/> }
          </div>
        </Col>
      )
    }

    return (
      <Col sm={12}>
        <button ref='showAddIngredFormBtn' type='button' className='btn btn-primary btn-block' onClick={this.showAddForm}><i className='fa fa-plus'/></button>
      </Col>
    )
  }
}

export default AddIngredient;
