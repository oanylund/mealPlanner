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
  addWeek() {
    return true
  }
}
export default alt.createActions(LagUkeActions)
