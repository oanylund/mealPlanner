import alt from "../alt"
import moment from 'moment'
import LagUkeActions from '../actions/LagUkeActions'
import nb from 'moment/locale/nb'

moment.locale('nb', nb )

class LagUkeStore {
  constructor() {
    this.newWeek = {
      year: new Date().getFullYear(),
      week: moment().week(),
      days: {}
    }
    this.bindActions(LagUkeActions)
  }
  onWeekChange(weekYear) {
    this.newWeek.year = weekYear.year
    this.newWeek.week = weekYear.week
    Meteor.call('addWeek', this.newWeek, (err,res) => {
      if (err) {
        console.log(err.reason)
      }
    })
  }
  onDeleteDay(day) {
    delete this.newWeek.days[day]
  }
  onDeleteDays() {
    this.newWeek.days = {}
  }
  onAddDay(dayObj) {
    this.newWeek.days[dayObj.day] = {
      title: dayObj.title,
      comment: dayObj.comment,
      imgUrl: '/images/hungry.jpg'
    }
  }
}

export default alt.createStore(LagUkeStore, 'LagUkeStore')
