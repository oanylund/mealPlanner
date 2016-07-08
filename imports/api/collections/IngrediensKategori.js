import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const IngrediensKat = new Mongo.Collection('ingrediensKat');

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

const IngrediensKatSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Navn på kategori',
    index: 1,
  }
})

IngrediensKat.attachSchema(IngrediensKatSchema)

export default IngrediensKat;
