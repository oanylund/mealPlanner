import { composeWithTracker } from 'react-komposer'
import DinnerListItem from '../components/Uker/VisUke/DinnerListItem.jsx'
import { Meteor } from 'meteor/meteor'
import Middager from '../../../api/collections/middag'

function composer(props, onData) {
  const handle = Meteor.subscribe('middagsListe')
  if (handle.ready()) {
    const dinner = Middager.findOne({ _id: props.dinnerId }, {
      fields: {
        title: 1,
        description: 1,
        imageId: 1,
      }
    });
    const imageId = dinner.imageId;
    onData(null, {dinner, imageId});
  }
}

export default composeWithTracker(composer)(DinnerListItem)
