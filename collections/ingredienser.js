Ingredienser = new Mongo.Collection('ingredienser')

// Add search method to collection class
Ingredienser.searchName = (query) => {
  return Ingredienser.find({
      'name.plural' : {
        $regex: RegExp.escape(query),
        $options: 'i'
      }
    },
    {
      limit: 20
    });
}


Ingredienser.allow({
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

SingularPluralSchema = new SimpleSchema({
  singular: {
    type: String,
    label: 'Entall',
    index: 1
  },
  plural: {
    type: String,
    optional: true,
    label: 'Flertall'
  },
})

IngrediensSchema = new SimpleSchema({
  name: {
    type: SingularPluralSchema,
    label: 'Navn på ingrediens',
    index: 1
  },
  unit: {
    type: SingularPluralSchema,
    label: 'Hvordan enhet den måles i'
  },
  categoryId: {
    type: String,
    label: 'Kategori',
    index: 1
  },
  usedInDinners: {
    type: Array,
    optional: true
  },
  "usedInDinners.$": {
    type: String
  }
})

Ingredienser.attachSchema(IngrediensSchema)
