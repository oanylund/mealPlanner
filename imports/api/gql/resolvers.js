import ingrediens from '../collections/ingredienser';
import ingrediensKategori from '../collections/IngrediensKategori';
import middag from '../collections/middag';
import DinnerThumbs from '../collections/DinnerThumb';
import uker from '../collections/uker';
import handleliste from '../collections/handleliste';

// TODO: Nested Async find requests. not working for sub fields..

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
    ingredientCategory(_, args) {
      return ingrediensKategori.findOne(args.id);
    },
    ingredientCategories(_, args) {
      return ingrediensKategori.find({}, args).fetch();
    }
  },
  Middag: {
    ingredients(middag) {
      const ingreds = middag.ingredients.map( (ingred) => {
        return ingred;
      });
      return ingreds
    },
    image(dinner) {
      if (dinner.imageId) {
        const id = DinnerThumbs.findOne({ _id: dinner.imageId });
        return {
          id: dinner.imageId,
          url: id.url()
        }
      }
      return {
        id: null,
        url: '/images/default-dinner.png'
      }
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
    },
    category(ing) {
      return {
        id: ing.categoryId,
        name: ingrediensKategori.findOne(ing.categoryId).name
      }
    }
  },
  IngredientCategory: {
    ingredients(category, args) {
      return ingrediens.find({ categoryId: category._id }, args).fetch();
    }
  }
};

module.exports = resolvers;
