import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'

// const validateTitleAndDesc = (title,desc) => {



class LagMiddagStore {
  constructor() {
    this.dinnerObj = {
      title: '',
      desc: ''
    }
    this.titleDescObj = {
      titleHasBeenChanged: false,
      descHasBeenChanged: false,
    }
    this.validSteps = {
      titleAndDesc: false
    }
    this.bindActions(LagMiddagActions)
  }
  validateTitleAndDesc() {
    if( this.dinnerObj.title.length > 0 && this.dinnerObj.desc.length > 0 ) {
      this.validSteps.titleAndDesc = true
    }
    else {
      this.validSteps.titleAndDesc = false
    }
  }
  onTitleFieldChanged(newVal) {
    this.dinnerObj.title = newVal;
    let titleHasBeenChanged = this.titleDescObj.titleHasBeenChanged;
    if (!titleHasBeenChanged)
      this.titleDescObj.titleHasBeenChanged = true;
    this.validateTitleAndDesc()
  }
  onDescFieldChanged(newVal) {
    this.dinnerObj.desc = newVal
    let descHasBeenChanged = this.titleDescObj.descHasBeenChanged;
    if (!descHasBeenChanged)
      this.titleDescObj.descHasBeenChanged = true;
    this.validateTitleAndDesc()
  }
}

export default alt.createStore(LagMiddagStore, 'LagMiddagStore')
