export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagerAllProperties')
  if (handle.ready()) {
    const dinner = Middager.findOne({ _id: props.routeParams.dinnerId })
    onData(null, {dinner})
  }
}
