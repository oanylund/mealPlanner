Middager = new Mongo.Collection("middager")

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
  }

})

Middager.attachSchema(MiddagSchema)
