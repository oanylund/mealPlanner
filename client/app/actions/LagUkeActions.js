import alt from "../alt"

class LagUkeActions {
  weekNameChanged(newName) {
    return newName
  }
  deleteDay(day) {
    return day
  }
  deleteDays() {
    return true
  }
  addDay(dayObject) {
    return dayObject
  }
}
export default alt.createActions(LagUkeActions)
