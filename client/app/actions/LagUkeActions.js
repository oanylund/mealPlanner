import alt from "../alt"

class LagUkeActions {
  weekChange(weekYear) {
    return weekYear
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
