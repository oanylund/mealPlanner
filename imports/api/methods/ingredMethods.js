import { Meteor } from 'meteor/meteor';
import Ingredienser from '../collections/ingredienser';
import IngrediensKat from '../collections/IngrediensKategori';

Meteor.methods({
  addIngredient: (newIngred) => {
    Ingredienser.insert({
      name: {
        singular: newIngred.ingredSingular,
        plural: newIngred.ingredPlural
      },
      unit: {
        singular: newIngred.unitSingular,
        plural: newIngred.unitPlural
      },
      categoryId: newIngred.category
    })
  },
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
  },
  removeIngredDinnerDep: (ingredId,dinnerId) => {
    Ingredienser.update(ingredId, {
      $pull: { usedInDinners: dinnerId }
    });
  }
})
