Meteor.methods({
  deleteDinner: (id, imageId) => {
    DinnerThumbs.remove({ _id: imageId }, () => {
      Middager.remove({ _id: id });
    })
  },
  addStepToDinner: (id, newStep) => {
    Middager.update({ _id: id }, {
      $push: { steps: newStep }
    });
  },
  deleteStepInDinner: (id, stepsLeft) => {
    Middager.update({ _id: id }, {
      $set: { steps: stepsLeft }
    });
  },
  editStepInDinner: (id, index, newVal) => {
    Middager.update({ _id: id }, {
      $set: { [`steps.${index}`]: newVal }
    });
  },
  moveStepInDinner: (id, reorderedSteps) => {
    Middager.update({ _id: id }, {
      $set: { steps: reorderedSteps }
    })
  }
});
