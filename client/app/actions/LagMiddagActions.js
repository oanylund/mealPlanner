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
  moveIngredientUp(moveIndex) {
    return moveIndex
  }
  moveIngredientDown(moveIndex) {
    return moveIndex
  }
  editIngredientQuantity(newQuantity) {
    return newQuantity
  }

}
export default alt.createActions(LagMiddagActions)
