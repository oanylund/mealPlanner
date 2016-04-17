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
    this.editDay = {
      status: false,
      dayName: null
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
      dayToAdd.title = dayObj.title;
      this.newWeek.days[dayObj.day] = dayToAdd;
    }
    else {
      dayToAdd.whynot = dayObj.whynot;
      this.newWeek.days[dayObj.day] = dayToAdd;
    }
  }
  onOpenEditDay(dayName) {
    this.editDay = {
      status: true,
      dayName: dayName
    }
  }
  onSubmitEditDay(dayObject) {
    const { day, ...dayProperties } = dayObject;
    this.newWeek.days[day] = dayProperties; 
    this.onCloseEditDay();
  }
  onCloseEditDay() {
    this.editDay = {
      status: false,
      dayName: null
    }
  }
  _addDinnerDepsAndResetStore(err, newWeekId) {
    if (err) throw err;
    _.each(this.newWeek.days, (day) => {
      if (day.dinnerId) {
        Meteor.call('addDinnerWeekDep', day.dinnerId, newWeekId);
      }
    });
    alt.recycle(thisStore);
  }
  onAddWeek() {
    if ( this.newWeek.name.length > 0 && Object.keys(this.newWeek.days).length > 0 ) {
      _.each(this.newWeek.days, (day, dayName) => {
        if( day.dinnerId ) {
          delete this.newWeek.days[dayName].title;
        }
      });
      Meteor.call('addWeek', this.newWeek, this._addDinnerDepsAndResetStore.bind(this));
    }
    else {
      // TODO: Handle error with notification system osv
    }
  }
}

let thisStore = alt.createStore(LagUkeStore, 'LagUkeStore');

export default thisStore;
