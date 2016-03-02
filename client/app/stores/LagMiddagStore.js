import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'

// const validateTitleAndDesc = (title,desc) => {



class LagMiddagStore {
  constructor() {
    this.dinnerObj = {
      title: '',
      desc: '',
      ingredients: []
    }
    this.titleDescObj = {
      titleHasBeenChanged: false,
      descHasBeenChanged: false,
    }
    this.ingredObj = {
      ingredHasBeenAdded: false
    }
    this.validSteps = {
      titleAndDesc: {
        valid: false,
      },
      ingredients: {
        valid: false
      }
    }
    this.bindActions(LagMiddagActions)
  }

  // Title and description handlers
  validateTitleAndDesc() {
    if( this.dinnerObj.title.length > 0 && this.dinnerObj.desc.length > 0 ) {
      this.validSteps.titleAndDesc.valid = true
    }
    else {
      this.validSteps.titleAndDesc.valid = false
    }
  }
  onTitleFieldChanged(newVal) {
    this.dinnerObj.title = newVal;
    let titleHasBeenChanged = this.titleDescObj.titleHasBeenChanged;
    if (!titleHasBeenChanged)
      this.titleDescObj.titleHasBeenChanged = true;
    this.validateTitleAndDesc()
  }
  onDescFieldChanged(newVal) {
    this.dinnerObj.desc = newVal
    let descHasBeenChanged = this.titleDescObj.descHasBeenChanged;
    if (!descHasBeenChanged)
      this.titleDescObj.descHasBeenChanged = true;
    this.validateTitleAndDesc()
  }

  // Ingredient handlers
  onAddIngredient(newIngred) {
    this.dinnerObj.ingredients.push(newIngred)
    if(!this.ingredObj.ingredHasBeenAdded)
      this.ingredObj.ingredHasBeenAdded = true;
    this.validateIngredients()
  }
  validateIngredients() {
    if( this.dinnerObj.ingredients.length > 0) {
      this.validSteps.ingredients.valid = true
    }
    else {
      this.validSteps.ingredients.valid = false
    }
  }

}

export default alt.createStore(LagMiddagStore, 'LagMiddagStore')
