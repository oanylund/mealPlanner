import React, { PropTypes } from 'react'
import AddIngredientForm from '../../LagMiddag/AddIngredientForm.jsx'
import EditIngredsList from './EditIngredsList.jsx'
import InfoAlert from '../../../Reusable/InfoAlert.jsx'
import PlusBtn from '../../../Reusable/PlusBtn.jsx'

class EditIngredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.editQuantity = this.editQuantity.bind(this);
    this.deleteIngred = this.deleteIngred.bind(this);
    this.moveIngred = this.moveIngred.bind(this);
    this.moveIngredUp = this.moveIngredUp.bind(this);
    this.moveIngredDown = this.moveIngredDown.bind(this);
  }
  showAddForm() {
    this.setState({
      showAddForm: true
    }, () => {
      this.refs.addIngredForm.highlightQuantity()
    })
  }
  hideAddForm() {
    this.setState({
      showAddForm: false
    }, () => {
      if( !!this.refs.showAddIngredFormBtn ) {
        this.refs.showAddIngredFormBtn.focusBtn();
      }
    });
  }
  addIngredient(newIngredient) {
    const newIngredInDinner = {
      quantity: newIngredient.quantity,
      ingredientId: newIngredient._id
    }
    Meteor.call('addIngredientToDinner', this.props.dinnerId, newIngredInDinner);
  }
  editQuantity({ index, quantity }) {
    Meteor.call('editIngredQuantityInDinner', this.props.dinnerId, index, quantity);
  }
  deleteIngred(delIndex) {
    if( this.props.ingredients.length > 1 ) {
      let tmpIngreds = this.props.ingredients;
      tmpIngreds.splice(delIndex,1);
      Meteor.call('deleteIngredFromDinner', this.props.dinnerId, tmpIngreds);
    }
    // TODO: Handle delete not allowed with notification
  }
  moveIngred(indexes) {
    let tmpIngreds = this.props.ingredients;
    let tmp = tmpIngreds.splice(indexes.old,1);
    tmpIngreds.splice(indexes.new,0,tmp[0]);
    Meteor.call('moveIngredInDinner', this.props.dinnerId, tmpIngreds);
  }
  moveIngredUp(index) {
    if( index > 0 ) {
      let tmpIngreds = this.props.ingredients;
      let tmp = tmpIngreds.splice(index,1);
      tmpIngreds.splice(index-1,0,tmp[0]);
      Meteor.call('moveIngredInDinner', this.props.dinnerId, tmpIngreds);
    }
  }
  moveIngredDown(index) {
    let tmpIngreds = this.props.ingredients;
    let tmp = tmpIngreds.splice(index,1);
    tmpIngreds.splice(index+1,0,tmp[0]);
    Meteor.call('moveIngredInDinner', this.props.dinnerId, tmpIngreds);
  }
  render () {
    const showIngredsComponent = <EditIngredsList ingreds={this.props.ingredients}
                                    editQuantity={this.editQuantity}
                                    deleteIngred={this.deleteIngred}
                                    moveIngredUp={this.moveIngredUp}
                                    moveIngredDown={this.moveIngredDown}
                                    moveIngred={this.moveIngred}
                                  />;

    const ingredsInStore = this.props.ingredients.length;
    const alertEmpty = 'Trykk + knappen for å legge til ingredienser';
    const showIngreds = ingredsInStore === 0 ? <InfoAlert txt={alertEmpty} /> : showIngredsComponent;

    const form = <AddIngredientForm ref='addIngredForm' hideForm={this.hideAddForm}
                    addIngredient={this.addIngredient} />;

    const btn = <PlusBtn click={this.showAddForm} ref='showAddIngredFormBtn' />;

    return (
      <div className='showDinner-Ingreds'>
        <h4>Ingredienser:</h4>
        {showIngreds}
        { this.state.showAddForm ? form : btn }
      </div>
    )
  }
}

export default EditIngredients;
