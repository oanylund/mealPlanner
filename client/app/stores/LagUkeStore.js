import alt from "../alt"
import moment from 'moment'
import LagUkeActions from '../actions/LagUkeActions'
import nb from 'moment/locale/nb'

moment.locale('nb', nb )

class LagUkeStore {
  constructor() {
    this.newWeek = {
      year: new Date().getFullYear(),
      week: moment().week()
    }
    this.bindActions(LagUkeActions);
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
}

export default alt.createStore(LagUkeStore, 'LagUkeStore')
