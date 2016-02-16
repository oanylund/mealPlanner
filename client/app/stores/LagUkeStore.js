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
    if(!dayObj.isDinner) {
      dayObj.imgUrl = '/images/hungry.jpg'
    }
    this.newWeek.days[dayObj.day] = {
      title: dayObj.title,
      comment: dayObj.comment,
      imgUrl: dayObj.imgUrl
    }
  }
}

export default alt.createStore(LagUkeStore, 'LagUkeStore')
