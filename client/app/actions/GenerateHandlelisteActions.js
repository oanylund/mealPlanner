import alt from "../alt"
import moment from 'moment'

class GenerateHandlelisteActions {
  nameChange(e) {
    return e.target.value;
  }
  dateChange(e) {
    return {
      week: +e.target.value.slice(-2),
      year: +e.target.value.slice(0,4)
    }
  }
  initDate() {
    return {
      week: moment().locale('nb').format('WW'),
      year: moment().locale('nb').format('YYYY')
    }
  }
}

export default alt.createActions(GenerateHandlelisteActions)
