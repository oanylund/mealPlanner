// type ShoppingList {
//   name: String
//   week: Int
//   year: Int
//   active: Boolean
//   archived: Boolean
//   weekPlan: ShoppingListWeek
//   listItems: [ShoppingListItem]
// }
//
// type ShoppingListWeek {
//   id: String
//   name: String
// }
//
// type ShoppingListItem {
//   purchased: Boolean
//   itemString: String
// }
//


var typeDefinitions = `

type Day {
    day: String
    dinnerId: String
    dinner: Middag
    whynot: String
    comment: String
}

type Week {
  name: String
  days: [Day]
  usedInShopList: [String]
}

type Middag {
  _id: String
  title: String
  description: String
  steps: [String]
  image: Image
  usedInWeek: [String]
  ingredients: [IngredInDinner]
}

type Image {
  id: String
  url: String
}

type IngredInDinner {
  quantity: Int
  ingredientId: String
  ingredient: Ingrediens
}

type Ingrediens {
  _id: String
  name: SingPlur
  unit: SingPlur
  category: IngredientCategory
  usedInDinners: [String]
}

type IngredientCategory {
  _id: String
  name: String
  ingredients(limit: Int, skip: Int): [Ingrediens]
}

type SingPlur {
  singular: String
  plural: String
}

type Query {
  weeks(limt: Int, skip: Int): [Week]
  dinners(limit: Int, skip: Int): [Middag]
  dinner(id: String): Middag
  ingredients(limit: Int, skip: Int): [Ingrediens]
  ingredient(id: String): Ingrediens
  ingredientCategory(id: String): IngredientCategory
  ingredientCategories(limit: Int, Skip: Int): [IngredientCategory]
}
schema {
  query: Query
}
`;

module.exports = [typeDefinitions];
