Meteor.methods({
  addWeek: (newWeek) => {
    return Uker.insert(newWeek);
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
