export default function composer(props, onData) {
  const handle = Meteor.subscribe('handlelister');
  if (handle.ready()) {
    const shoplist = Handlelister.findOne(props.routeParams.listId);
    onData(null, {shoplist});
  }
}
