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
}
export default alt.createActions(LagMiddagActions)
