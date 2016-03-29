Uker = new Mongo.Collection("uker");

DagSchema = new SimpleSchema({
  dinnerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: 'middagId',
    optional: true
  },
  isDinner: {
    type: Boolean
  },
  title: {
    type: String,
    label: 'Begrunnelse for ingen middag, eller middagstittel',
  },
  comment: {
    type: String,
    label: 'Kommentar til middag',
    optional: true
  }
})

DagerSchema = new SimpleSchema({
  tuesday: {
    type: DagSchema,
    label: 'tirsdag',
    optional: true
  },
  wednesday: {
    type: DagSchema,
    label: 'onsdag',
    optional: true
  },
  thursday: {
    type: DagSchema,
    label: 'torsdag',
    optional: true
  },
  friday: {
    type: DagSchema,
    label: 'fredag',
    optional: true
  },
  saturday: {
    type: DagSchema,
    label: 'lørdag',
    optional: true
  },
  sunday: {
    type: DagSchema,
    label: 'søndag',
    optional: true
  },
  monday: {
    type: DagSchema,
    label: 'mandag',
    optional: true
  }
})

UkerSchema = new SimpleSchema({
  _id: {
    type: String, // WW( week etc 34) YYYY( year etc 2015) ---> _id: WWYYYY
  },
  year: {
    type: Number,
    label: 'År',
  },
  week: {
    type: Number,
    label: 'Ukenummer'
  },
  days: {
    type: DagerSchema
  }
})

Uker.attachSchema(UkerSchema)
