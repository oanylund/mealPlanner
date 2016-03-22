import React, { PropTypes } from 'react'
import AddIngredientForm from './AddIngredientForm.jsx'
import ShowIngredsAdded from './ShowIngredsAdded.jsx'
import InfoAlert from '../../Reusable/InfoAlert.jsx'
import PlusBtn from '../../Reusable/PlusBtn.jsx'

class AddIngredient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddForm: false
    }
    this.showAddForm = this.showAddForm.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
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
  render () {

    const showIngredsComponent = <ShowIngredsAdded
                                  ingreds={this.props.dinnerObj.ingredients}
                                  editQuantity={this.props.editIngredientQuantity}
                                  deleteIngred={this.props.deleteIngredient}
                                  moveIngred={this.props.moveIngredient}
                                  moveIngredUp={this.props.moveIngredientUp}
                                  moveIngredDown={this.props.moveIngredientDown}
                                 />
    const ingredsInStore = this.props.dinnerObj.ingredients.length;
    const alertEmpty = 'Trykk + knappen for å legge til ingredienser';
    const showIngreds = ingredsInStore === 0 ? <InfoAlert txt={alertEmpty} /> : showIngredsComponent;

    const form = <AddIngredientForm ref='addIngredForm' hideForm={this.hideAddForm}
                    addIngredient={this.props.addIngredient} />;

    const btn = ( <PlusBtn click={this.showAddForm} ref='showAddIngredFormBtn' /> );

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
