Middager = new Mongo.Collection("middager")

IngrediensInDinner = new SimpleSchema({
  quantity: {
    type: Number
  },
  ingredientId: {
    type: String
  }
})

MiddagSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'tittel'
  },
  description: {
    type: String,
    label: 'beskrivelse'
  },
  steps: {
    type: Array,
    optional: true
  },
  "steps.$": {
    type: String
  },
  imageId: {
    type: String,
    optional: true
  },
  ingredients: {
    type: [IngrediensInDinner]
  }
})

Middager.attachSchema(MiddagSchema)
