import alt from "../alt"

class LagMiddagActions {
  titleFieldChanged(newVal) {
    return newVal
  }
  descFieldChanged(newVal) {
    return newVal
  }
  addIngredient(newIngred) {
    return newIngred
  }
  deleteIngredient(delIndex) {
    return delIndex
  }
  moveIngredient(indexes) {
    return indexes
  }
  moveIngredientUp(moveIndex) {
    return moveIndex
  }
  moveIngredientDown(moveIndex) {
    return moveIndex
  }
  editIngredientQuantity(newQuantity) {
    return newQuantity
  }
  addStep(newStep) {
    return newStep
  }
  deleteStep(delIndex) {
    return delIndex
  }
  editStep(newDesc) {
    return newDesc
  }
  moveStep(indexes) {
    return indexes
  }
  moveStepUp(moveIndex) {
    return moveIndex
  }
  moveStepDown(moveIndex) {
    return moveIndex
  }

}
export default alt.createActions(LagMiddagActions)
