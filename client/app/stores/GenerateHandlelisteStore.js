import alt from '../alt'
import GenerateHandlelisteActions from '../actions/GenerateHandlelisteActions'

class GenerateHandlelisteStore {
  constructor() {
    this.newShoppingList = {
      name: '',
      week: '',
      year: ''
    }
    this.validation = {
      nameHasBeenChanged: false
    }
    this.bindActions(GenerateHandlelisteActions)
  }
  onNameChange(newName) {
    this.newShoppingList.name = newName;
    if( !this.validation.nameHasBeenChanged ) {
      this.validation.nameHasBeenChanged = true;
    }
  }
  onDateChange(dateObj) {
    this._handleDateChange(dateObj);
  }
  onInitDate(dateObj) {
    this._handleDateChange(dateObj);
  }
  _handleDateChange(dateObj) {
    this.newShoppingList.week = dateObj.week;
    this.newShoppingList.year = dateObj.year;
  }
}

export default alt.createStore(GenerateHandlelisteStore, 'GenerateHandlelisteStore');
