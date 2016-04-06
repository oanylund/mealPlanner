Meteor.methods({
  removeIngredient: (id) => {
    Ingredienser.remove(id)
  },
  updateIngredient: (id,updatedDoc) => {
    Ingredienser.update(id,{
      $set: updatedDoc
    })
  },
  removeIngredientCategory: (id) => {
    IngrediensKat.remove(id)
  },
  updateIngredientCategory: (id,newName) => {
    IngrediensKat.update(id, {
      $set: {
        name: newName
      }
    })
  },
  addIngredDinnerDep: (ingredId,dinnerId) => {
    Ingredienser.update(ingredId, {
      $addToSet: { usedInDinners: dinnerId }
    });
  }
})
