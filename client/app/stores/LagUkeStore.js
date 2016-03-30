import alt from "../alt"
// import moment from 'moment'
import LagUkeActions from '../actions/LagUkeActions'

class LagUkeStore {
  constructor() {
    this.newWeek = {
      year: 0,
      week: 0,
      days: {}
    }
    this.weekExists = false
    this.bindActions(LagUkeActions)
  }
  onWeekChange(weekYear) {
    this.newWeek.year = weekYear.year
    this.newWeek.week = weekYear.week
  }
  onWeekChangeResponse(exists) {
    this.weekExists = exists
  }
  onDeleteDay(day) {
    delete this.newWeek.days[day]
  }
  onDeleteDays() {
    this.newWeek.days = {}
  }
  onAddDay(dayObj) {
    let dayToAdd = {}
    if ( dayObj.comment ) {
      dayToAdd.comment = dayObj.comment
    }
    if(dayObj.dinnerId) {
      dayToAdd.dinnerId = dayObj.dinnerId
      this.newWeek.days[dayObj.day] = dayToAdd
    }
    else {
      dayToAdd.whynot = dayObj.whynot
      this.newWeek.days[dayObj.day] = dayToAdd
    }
  }
}

export default alt.createStore(LagUkeStore, 'LagUkeStore')
