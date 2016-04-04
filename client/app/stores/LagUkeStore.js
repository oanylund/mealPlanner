import alt from "../alt"
// import moment from 'moment'
import LagUkeActions from '../actions/LagUkeActions'

class LagUkeStore {
  constructor() {
    this.newWeek = {
      name: '',
      days: {}
    }
    this.validation = {
      nameHasBeenChanged: false
    }
    this.bindActions(LagUkeActions);
  }
  onWeekNameChanged(newName) {
    this.newWeek.name = newName;
    if ( !this.validation.nameHasBeenChanged ) {
      this.validation.nameHasBeenChanged = true;
    }
  }
  onDeleteDay(day) {
    delete this.newWeek.days[day];
  }
  onDeleteDays() {
    this.newWeek.days = {};
  }
  onAddDay(dayObj) {
    let dayToAdd = {};
    if ( dayObj.comment ) {
      dayToAdd.comment = dayObj.comment;
    }
    if(dayObj.dinnerId) {
      dayToAdd.dinnerId = dayObj.dinnerId;
      this.newWeek.days[dayObj.day] = dayToAdd;
    }
    else {
      dayToAdd.whynot = dayObj.whynot;
      this.newWeek.days[dayObj.day] = dayToAdd;
    }
  }
}

export default alt.createStore(LagUkeStore, 'LagUkeStore')
