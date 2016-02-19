IngrediensKat = new Mongo.Collection('ingrediensKat')

IngrediensKat.allow({
  insert: (userId,doc) => {
    return true
  },
  update: (userId,doc) => {
    return true
  },
  remove: (userId,doc) => {
    return true
  },
})

IngrediensKatSchema = new SimpleSchema({
  name: {
    type: String,
    index: 1
  }
})

IngrediensKat.attachSchema(IngrediensKatSchema)
