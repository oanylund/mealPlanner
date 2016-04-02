Middager = new Mongo.Collection("middager")

Middager.searchTitle = (titleFilter, limit) => {

  if( limit ) {
    return Middager.find({
      title: {
        $regex: RegExp.escape(titleFilter),
        $options: 'i'
      }
    },
    {
      limit: limit
    });
  }
  else {
    return Middager.find({
      title: {
        $regex: RegExp.escape(titleFilter),
        $options: 'i'
      }
    });
  }
}

Middager.allow({
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
