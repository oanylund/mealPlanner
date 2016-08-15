import ingrediens from '../collections/ingredienser';
import ingrediensKategori from '../collections/IngrediensKategori';
import middag from '../collections/middag';
import DinnerThumbs from '../collections/DinnerThumb';
import uker from '../collections/uker';
import handleliste from '../collections/handleliste';
import sorter from '../../utils/sortDays.js';

import _ from 'underscore'

// TODO: Nested Async find requests. not working for sub fields..

const sortByDay = (a, b) => {
  return sorter[a.day] > sorter[b.day];
}

var resolvers = {
  Query: {
    shoppingLists(_, args) {
      return handleliste.find({}, args).fetch();
    },
    week(_, args) {
      return uker.findOne(args.id);
    },
    weeks(_, args) {
      return uker.find({}, args).fetch();
    },
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
  ShoppingList: {
    weekPlan({ weekPlan }) {
      return uker.findOne(weekPlan.id);
    },
    listItems(week) {
      return week.listItems;
    }
  },
  Week: {
    days(week) {
      return _.map(week.days, (day, dayName) => {
        return { day: dayName, ...day}
      }).sort(sortByDay);
    },
    usedInShopList(week) {
      return handleliste.find({ _id: { $in: week.usedInShopList } }).fetch();
    }
  },
  Day: {
    dinner(day) {
      return middag.findOne(day.dinnerId);
    }
  },
  Dinner: {
    ingredients(dinner) {
      return dinner.ingredients;
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
    },
    usedInWeek(dinner) {
      return uker.find({ _id: { $in: dinner.usedInWeek } }).fetch();
    }
  },
  IngredInDinner: {
    ingredient(ingInDin) {
      return ingrediens.findOne(ingInDin.ingredientId);
    }
  },
  Ingredient: {
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
    },
    usedInDinners(ing) {
      return middag.find({ _id: { $in: ing.usedInDinners } }).fetch();
    }
  },
  IngredientCategory: {
    ingredients(category, args) {
      return ingrediens.find({ categoryId: category._id }, args).fetch();
    }
  }
};

module.exports = resolvers;
