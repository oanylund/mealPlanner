import { Meteor } from 'meteor/meteor'
import Middager from '../../../api/collections/middag'

export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagsListe')
  if (handle.ready()) {
    const dinner = Middager.findOne({ _id: props.dinnerId });
    const imageId = dinner.imageId;
    onData(null, {dinner, imageId});
  }
}
