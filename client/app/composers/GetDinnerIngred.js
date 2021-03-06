export default function composer(props, onData) {
  const handle = Meteor.subscribe('ingredienser')
  if (handle.ready()) {
    const ingredient = Ingredienser.findOne({ _id: props.ingId })
    onData(null, {ingredient})
  }
}
