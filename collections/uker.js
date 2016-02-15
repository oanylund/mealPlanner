Uker = new Mongo.Collection("uker");

DagSchema = new SimpleSchema({
  middagId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: 'middagId',
    optional: true
  },
  ForklarIngen: {
    type: String,
    label: 'Begrunnelse for ingen middag',
    optional: true
  },
  kommentar: {
    type: String,
    label: 'Kommentar til middag',
    optional: true
  }
})

DagerSchema = new SimpleSchema({
  tirsdag: {
    type: DagSchema,
    label: 'tirsdag',
    optional: true
  },
  onsdag: {
    type: DagSchema,
    label: 'onsdag',
    optional: true
  },
  torsdag: {
    type: DagSchema,
    label: 'torsdag',
    optional: true
  },
  fredag: {
    type: DagSchema,
    label: 'fredag',
    optional: true
  },
  lørdag: {
    type: DagSchema,
    label: 'lørdag',
    optional: true
  },
  søndag: {
    type: DagSchema,
    label: 'søndag',
    optional: true
  },
  mandag: {
    type: DagSchema,
    label: 'mandag',
    optional: true
  }
})

UkerSchema = new SimpleSchema({
  _id: {
    type: Number, // WW( week etc 34) YYYY( year etc 2015) ---> _id: WWYYYY
  },
  year: {
    type: Number,
    label: 'År',
  },
  week: {
    type: Number,
    label: 'Ukenummer'
  },
  dager: {
    type: DagerSchema
  }
})

Uker.attachSchema(UkerSchema)
