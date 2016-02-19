Ingredienser = new Mongo.Collection('ingredienser')

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
    index: true
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
    index: 1
  }


})

Ingredienser.attachSchema(IngrediensSchema)
