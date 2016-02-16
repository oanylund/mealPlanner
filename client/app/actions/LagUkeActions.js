import alt from "../alt"

class LagUkeActions {
  weekChange(weekYear) {
    let weekString = weekYear.week < 10 ? `0${weekYear.week}` : weekYear.week
    Meteor.call('checkWeekExists', `${weekString}${weekYear.year}`, this.weekChangeResponse)
    return weekYear
  }
  weekChangeResponse(err,res) {
    if (err) {
      console.log(err.reason)
    }
    return res
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
