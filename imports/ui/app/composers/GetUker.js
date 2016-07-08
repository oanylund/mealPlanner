import { Meteor } from 'meteor/meteor'
import Uker from '../../../api/collections/uker'

export default function composer(props, onData) {
  const handle = Meteor.subscribe('uker')
  if (handle.ready()) {
    const weeks = Uker.find().fetch()
    onData(null, {weeks})
  }
}
