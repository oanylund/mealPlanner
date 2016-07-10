var typeDefinitions = `

type ShoppingList {
  name: String
  week: Int
  year: Int
  active: Boolean
  archived: Boolean
  weekPlan: Week
  listItems: [ShoppingListItem]
}

type ShoppingListItem {
  purchased: Boolean
  itemString: String
}

type Day {
    day: String
    dinnerId: String
    dinner: Dinner
    whynot: String
    comment: String
}

type Week {
  _id: String
  name: String
  days: [Day]
  usedInShopList: [ShoppingList]
}

type Dinner {
  _id: String
  title: String
  description: String
  steps: [String]
  image: Image
  usedInWeek: [Week]
  ingredients: [IngredInDinner]
}

type Image {
  id: String
  url: String
}

type IngredInDinner {
  quantity: Int
  ingredientId: String
  ingredient: Ingredient
}

type Ingredient {
  _id: String
  name: SingPlur
  unit: SingPlur
  category: IngredientCategory
  usedInDinners: [Dinner]
}

type IngredientCategory {
  _id: String
  name: String
  ingredients(limit: Int, skip: Int): [Ingredient]
}

type SingPlur {
  singular: String
  plural: String
}

type Query {
  shoppingLists(limit: Int, skip: Int): [ShoppingList]
  week(id: String): Week
  weeks(limit: Int, skip: Int): [Week]
  dinners(limit: Int, skip: Int): [Dinner]
  dinner(id: String): Dinner
  ingredients(limit: Int, skip: Int): [Ingredient]
  ingredient(id: String): Ingredient
  ingredientCategory(id: String): IngredientCategory
  ingredientCategories(limit: Int, Skip: Int): [IngredientCategory]
}
schema {
  query: Query
}
`;

module.exports = [typeDefinitions];
