import { Meteor } from 'meteor/meteor';
import Uker from '../collections/uker';
import Middager from '../collections/middag';

Meteor.methods({
  addWeek: (newWeek) => {
    return Uker.insert(newWeek);
  },
  deleteWeek: (weekId) => {
    Uker.remove(weekId, () => {
      Middager.update({}, {
        $pull: { usedInWeek: weekId }
      },
      {
        multi: true
      });

    });
  },
  editWeekTitle: (id, newName) => {
    Uker.update({ _id: id }, {
      $set: { name: newName }
    });
  },
  editDay: (id, changedDay) => {
    const { day, ...dayProperties } = changedDay;
    Uker.update({ _id: id }, {
      $set: { [`days.${day}`]: dayProperties }
    });
  },
  deleteDay: (day, weekId) => {
    Uker.update(weekId, {
      $unset: { [`days.${day}`]: '' }
    });
  },
  addWeekShopListDep: (weekId,shopListId) => {
    Uker.update(weekId, {
      $addToSet: { usedInShopList: shopListId }
    });
  },
  removeWeekShopListDep: (weekId,shopListId) => {
    Uker.update(weekId, {
      $pull: { usedInShopList: shopListId }
    });
  }
});
