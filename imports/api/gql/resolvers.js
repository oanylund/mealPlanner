import middag from '../collections/middag';
import ingrediens from '../collections/ingredienser';

var resolvers = {
  Query: {
    dinners(_, args) {
      return middag.find({}, args).fetch();
    },
    dinner(_, args) {
      return middag.findOne(args.id);
    },
    ingredients(_, args) {
      return ingrediens.find({}, args).fetch();
    },
    ingredient(_, args) {
      return ingrediens.findOne(args.id);
    },
  },
  Middag: {
    ingredients(middag) {
      const ingreds = middag.ingredients.map( (ingred) => {
        return ingred;
      });
      return ingreds
    }
  },
  IngredInDinner: {
    ingredient(ingInDin) {
      return ingrediens.findOne(ingInDin.ingredientId);
    }
  },
  Ingrediens: {
    name(ing) {
      return ing.name;
    },
    unit(ing) {
      return ing.unit;
    }
  },
};

module.exports = resolvers;
