import { Meteor } from 'meteor/meteor'
import Handlelister from '../../../api/collections/handleliste'

export default function composer(props, onData) {
  const handle = Meteor.subscribe('handlelister');
  if (handle.ready()) {
    const listItemsAndId = Handlelister.findOne(props._id, {
      fields: {
        listItems: 1
      }
    });
    onData(null, listItemsAndId);
  }
}
