Ingredienser = new Mongo.Collection("ingredienser")

IngrediensSchema = new SimpleSchema({

  name: {
    type: Object
  },
  "name.$.singular": {
    type: String
  },
  "name.$.plural": {
    type: String,
    optional: true
  },

  unit: {
    type: Object
  },
  "unit.$.singular": {
    type: String
  },
  "unit.$.plural": {
    type: String,
    optional: true
  },

})

Ingredienser.attachSchema(IngrediensSchema)
