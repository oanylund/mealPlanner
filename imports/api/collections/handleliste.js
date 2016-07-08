import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Handlelister = new Mongo.Collection('handlelister');

Handlelister.allow({
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

ListItemSchema = new SimpleSchema({
  purchased: {
    type: Boolean,
    defaultValue: false
  },
  itemString: {
    type: String
  }
});

HandlelisteSchema = new SimpleSchema({
  name: {
    type: String
  },
  week: {
    type: Number
  },
  year: {
    type: Number
  },
  active: {
    type: Boolean,
    defaultValue: false
  },
  archived: {
    type: Boolean,
    defaultValue: false
  },
  weekPlan: {
    type: Object,
    optional: true
  },
  "weekPlan.id": {
    type: String
  },
  "weekPlan.name": {
    type: String
  },
  listItems: {
    type: [ListItemSchema]
  }
});

Handlelister.attachSchema(HandlelisteSchema);

export default Handlelister;
