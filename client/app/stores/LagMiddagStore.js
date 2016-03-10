import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'

// const validateTitleAndDesc = (title,desc) => {



class LagMiddagStore {
  constructor() {
    this.dinnerObj = {
      title: '',
      desc: '',
      ingredients: [],
      steps: []
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
    this.dinnerObj.ingredients.push(newIngred);
    if(!this.ingredObj.ingredHasBeenAdded)
      this.ingredObj.ingredHasBeenAdded = true;
    this.validateIngredients()
  }
  onDeleteIngredient(delIndex) {
    this.dinnerObj.ingredients.splice(delIndex,1);
    this.validateIngredients();
  }
  onMoveIngredientUp(index) {
    if( index > 0 ) {
      let tmp = this.dinnerObj.ingredients.splice(index,1);
      this.dinnerObj.ingredients.splice(index-1,0,tmp[0]);
    }
  }
  onMoveIngredient(indexes) {
    let tmp = this.dinnerObj.ingredients.splice(indexes.old,1);
    this.dinnerObj.ingredients.splice(indexes.new,0,tmp[0]);
  }
  onMoveIngredientDown(index) {
    let tmp = this.dinnerObj.ingredients.splice(index,1);
    this.dinnerObj.ingredients.splice(index+1,0,tmp[0]);
  }
  onEditIngredientQuantity(newQuantity) {
    this.dinnerObj.ingredients[newQuantity.index].quantity = newQuantity.quantity;
  }
  validateIngredients() {
    if( this.dinnerObj.ingredients.length > 0) {
      this.validSteps.ingredients.valid = true;
    }
    else {
      this.validSteps.ingredients.valid = false;
    }
  }
  // Steps handlers
  onAddStep(newStep) {
    this.dinnerObj.steps.push(newStep);
  }
  onDeleteStep(delIndex) {
    this.dinnerObj.steps.splice(delIndex,1);
    // this.validateIngredients(); TODO
  }
  onEditStep(editStepObj) {
    this.dinnerObj.steps[editStepObj.index] = editStepObj.newTxt;
  }
  onMoveStep(indexes) {
    let tmp = this.dinnerObj.steps.splice(indexes.old,1);
    this.dinnerObj.steps.splice(indexes.new,0,tmp[0]);
  }
  onMoveStepUp(index) {
    if( index > 0 ) {
      let tmp = this.dinnerObj.steps.splice(index,1);
      this.dinnerObj.steps.splice(index-1,0,tmp[0]);
    }
  }
  onMoveStepDown(index) {
    let tmp = this.dinnerObj.steps.splice(index,1);
    this.dinnerObj.steps.splice(index+1,0,tmp[0]);
  }
}

export default alt.createStore(LagMiddagStore, 'LagMiddagStore')
