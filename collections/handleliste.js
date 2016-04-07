Handlelister = new Mongo.Collection('handlelister');

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

listItemSchema = new SimpleSchema({
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
    type: Boolean
  },
  archived: {
    type: Boolean
  },
  weekPlanId: {
    type: String,
    optional: true
  }
  listItems: {
    type: [listItemSchema]
  }
});

Handlelister.attachSchema(HandlelisteSchema);
