Middager = new Mongo.Collection("middager")

MiddagSchema = new SimpleSchema({
  tittel: {
    type: String,
    label: 'tittel'
  },
  beskrivelse: {
    type: String,
    label: 'beskrivelse'
  },
  steg: {
    type: [String]
  },
  bildeUrl: {
    type: String,
    defaultValue: '/images/default-dinner.png'
  }

})
