Meteor.methods({
  addWeek: (newWeek) => {
    return Uker.insert(newWeek);
  },
});
