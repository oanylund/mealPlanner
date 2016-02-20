Meteor.methods({
  removeIngredient: (id) => {
    Ingredienser.remove(id)
  },
  updateIngredient: (id,updatedDoc) => {
    Ingredienser.update(id,{
      $set: updatedDoc
    })
  }
})
