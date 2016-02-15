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
}
export default alt.createActions(LagUkeActions)
