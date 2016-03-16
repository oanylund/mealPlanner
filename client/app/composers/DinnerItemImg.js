export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagImageThumbs')
  if (handle.ready()) {
    const thumb = DinnerThumbs.findOne({ _id: props.imageId })
    onData(null, {thumb})
  }
}
