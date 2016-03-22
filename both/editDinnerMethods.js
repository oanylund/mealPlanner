Meteor.methods({
  deleteDinner: (id, imageId) => {
    DinnerThumbs.remove({ _id: imageId }, () => {
      Middager.remove({ _id: id });
    })
  },
  // Ingredients
  addIngredientToDinner: (id, newIngredient) => {
    Middager.update({ _id: id }, {
      $push: { ingredients: newIngredient }
    })
  },
  editIngredQuantityInDinner: (id, index, newQuantity) => {
    Middager.update({ _id: id }, {
      $set: { [`ingredients.${index}.quantity`]: newQuantity }
    });
  },
  deleteIngredFromDinner: (id, ingredsLeft) => {
    Middager.update({ _id: id }, {
      $set: { ingredients: ingredsLeft }
    });
  },
  moveIngredInDinner: (id, reorderedIngreds) => {
    Middager.update({ _id: id }, {
      $set: { ingredients: reorderedIngreds }
    });
  },

  // Steps
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
