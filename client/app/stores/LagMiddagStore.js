import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'

const dinnerStartObj = {
  title: '',
  desc: ''
}


class LagMiddagStore {
  constructor() {

    this.dinnerObj = dinnerStartObj

    this.bindActions(LagMiddagActions)
  }
  onAddTitleAndDesc(titleAndDesc) {
    this.dinnerObj.title = titleAndDesc.title
    this.dinnerObj.desc = titleAndDesc.desc
  }
}

export default alt.createStore(LagMiddagStore, 'LagMiddagStore')
