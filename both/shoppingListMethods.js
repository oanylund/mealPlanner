import _ from 'underscore'

Meteor.methods({
  generateShoppingList: (newList) => {
    check(newList.weekPlanId, String);

    const weekPlanDays = Uker.findOne({ _id: newList.weekPlanId }, { fields: { _id: 0, days: 1 } });
    let dinnerIdList = [];
    _.each(weekPlanDays.days, (day) => {
      if (day.dinnerId) {
        dinnerIdList.push(day.dinnerId);
      }
    });

    // TODO: FINNISH THIS LARGE METHOD
    return dinnerIdList;

  },
});
