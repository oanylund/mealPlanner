Meteor.methods({
  addDinner: (newDinner) => {
    return Middager.insert(newDinner);
  },
});
