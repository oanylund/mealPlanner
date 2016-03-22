export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagImageThumbs')
  let noImage = false;
  if (handle.ready()) {
    if( props.imageId) {
      const thumb = DinnerThumbs.findOne({ _id: props.imageId });
      onData(null, {thumb, noImage});
    }
    else {
      noImage = true;
      onData(null,{noImage});
    }
  }
}
