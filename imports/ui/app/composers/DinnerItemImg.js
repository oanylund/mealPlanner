import { Meteor } from 'meteor/meteor'
import DinnerThumbs from '../../../api/collections/DinnerThumb' 

export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagImageThumbs')
  let noImage = false;
  if (handle.ready()) {
    if( Match.test(props.imageId, String) ) {
      const thumb = DinnerThumbs.findOne({ _id: props.imageId });
      onData(null, {thumb, noImage});
    }
    else {
      noImage = true;
      onData(null,{noImage});
    }
  }
}
