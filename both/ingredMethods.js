Meteor.methods({
  removeIngredient: (id) => {
    Ingredienser.remove(id)
  }
})
