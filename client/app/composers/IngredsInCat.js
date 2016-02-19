export default function composer(props, onData) {
  const handle = Meteor.subscribe('ingredienser')
  if (handle.ready()) {
    const IngredsInCat = Ingredienser.find({ categoryId: props.category._id }).fetch()
    onData(null, {IngredsInCat})
  }
}
