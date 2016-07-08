import Actions from '../../actions/GenerateHandlelisteActions'
import { Meteor } from 'meteor/meteor'

const generateShoppingList = {
  generateList: {
    remote({pickedWeekPlan, newShoppingList}) {
      const payload = { weekPlanId: pickedWeekPlan.id, ...newShoppingList }
      return new Promise( (resolve, reject) => {
        Meteor.call('generateShoppingList', payload, (err, result) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(result);
          }
        });
      });
    },
    loading: Actions.serverLoading,
    success: Actions.generateListSuccess,
    error: Actions.generateListError
  }
}

export default generateShoppingList
