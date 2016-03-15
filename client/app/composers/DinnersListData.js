export default function composer(props, onData) {
  const handle = Meteor.subscribe('middagsListe')
  if (handle.ready()) {
    const dinners = Middager.find().fetch()
    onData(null, {dinners})
  }
}
