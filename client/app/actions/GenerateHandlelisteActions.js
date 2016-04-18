import alt from "../alt"
import moment from 'moment'


class GenerateHandlelisteActions {
  submitNameDate(values) {
    const { name, ...weekYear } = values;
    return {
      name: name,
      week: +weekYear.date.slice(-2),
      year: +weekYear.date.slice(0,4),
    }
  }
  initDate() {
    return {
      week: moment().locale('nb').format('WW'),
      year: moment().locale('nb').format('YYYY')
    }
  }
  setWeekPlan(pickedWeek) {
    return pickedWeek
  }
  gotoPreviousStep() {
    return true
  }
  serverLoading() {
    return true
  }
  generateListSuccess(newListId) {
    return newListId
  }
  generateListError(err) {
    return err
  }
}

export default alt.createActions(GenerateHandlelisteActions)
