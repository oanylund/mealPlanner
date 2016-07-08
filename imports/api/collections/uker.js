import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Uker = new Mongo.Collection("uker");

DagSchema = new SimpleSchema({
  dinnerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: 'middagId',
    optional: true
  },
  whynot: {
    type: String,
    label: 'Begrunnelse for ingen middag',
    optional: true
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
  name: {
    type: String,
    label: 'Ukemenyens navn',
  },
  days: {
    type: DagerSchema
  },
  usedInShopList: {
    type: Array,
    optional: true
  },
  "usedInShopList.$": {
    type: String
  }
})

Uker.attachSchema(UkerSchema);

export default Uker;
