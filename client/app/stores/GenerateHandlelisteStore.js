import alt from '../alt'
import GenerateHandlelisteActions from '../actions/GenerateHandlelisteActions'
import GenerateListSource from './sources/GenerateHandleliste'
import { browserHistory } from 'react-router'

class GenerateHandlelisteStore {
  constructor() {
    this.newShoppingList = {
      name: '',
      week: '',
      year: ''
    }
    this.pickedWeekPlan = null;
    this.currentStep = 1;
    this.bindActions(GenerateHandlelisteActions);
    this.registerAsync(GenerateListSource);
  }
  onSubmitNameDate(newVals) {
    this.newShoppingList = newVals;
    this.currentStep = 2;
  }
  onInitDate(defaultDates) {
    this.newShoppingList.week = defaultDates.week;
    this.newShoppingList.year = defaultDates.year;
  }
  onSetWeekPlan(pickedWeek) {
    this.pickedWeekPlan = pickedWeek;
    this.currentStep = 3;
  }
  onGotoPreviousStep() {
    this.currentStep = this.currentStep - 1;
  }
  onServerLoading() {
    this.currentStep = 4;
  }
  onGenerateListSuccess(newListId) {
    // TODO: Notification shoppinglist succesfully created
    browserHistory.push(`/uker/vis/${newListId}`);
  }
  onGenerateListError(err) {
    debugger
    // TODO: Notification with error message
  }
}

export default alt.createStore(GenerateHandlelisteStore, 'GenerateHandlelisteStore');
