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
  editStep(editStepObj) {
    return editStepObj
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
  addImage(image) {
    return image
  }
  addImageThumb(thumb) {
    return thumb
  }

}
export default alt.createActions(LagMiddagActions)
