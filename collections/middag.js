Middager = new Mongo.Collection("middager")

IngrediensInDinner = new SimpleSchema({
  quantity: {
    type: Number
  },
  displayOrder: {
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
    type: Object
  },
  "steps.$.order": {
    type: Number
  },
  "steps.$.description": {
    type: String
  },
  imgUrl: {
    type: String,
    defaultValue: '/images/default-dinner.png',
    optional: true
  },
  ingredients: {
    type: [IngrediensInDinner]
  }
})

Middager.attachSchema(MiddagSchema)
