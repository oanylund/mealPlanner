Meteor.methods({
  addDinner: (newDinner) => {
    Middager.insert(newDinner);
  },
});
