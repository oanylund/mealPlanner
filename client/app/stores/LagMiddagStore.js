import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'

class LagMiddagStore {
  constructor() {
    this.bindActions(LagMiddagActions)
  }
}

export default alt.createStore(LagMiddagStore, 'LagMiddagStore')
