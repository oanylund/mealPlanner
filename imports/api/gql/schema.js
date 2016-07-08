var typeDefinitions = `
type Middag {
  title: String
  description: String
  steps: [String]
  imageId: String
  usedInWeek: [String]
  ingredients: [IngredInDinner]
}

type IngredInDinner {
  quantity: Int
  ingredientId: String
  ingredient: Ingrediens
}

type Ingrediens {
  name: SingPlur
  unit: SingPlur
  categoryId: String
  usedInDinners: [String]
}

type SingPlur {
  singular: String
  plural: String
}

type Query {
  dinners(limit: Int, skip: Int): [Middag]
  dinner(id: String): Middag
  ingredients(limit: Int, skip: Int): [Ingrediens]
  ingredient(id: String): Ingrediens
}
schema {
  query: Query
}
`;

module.exports = [typeDefinitions];
