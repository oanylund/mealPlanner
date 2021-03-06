Meteor.methods({
  addDinner: (newDinner) => {
    return Middager.insert(newDinner);
  },
  addDinnerWeekDep: (dinnerId,weekId) => {
    Middager.update(dinnerId, {
      $addToSet: { usedInWeek: weekId }
    });
  },
  removeDinnerWeekDep: (dinnerId,weekId) => {
    Middager.update(dinnerId, {
      $pull: { usedInWeek: weekId }
    });
  }
});
