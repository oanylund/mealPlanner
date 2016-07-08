export default function composer(props, onData) {
  const handle = Meteor.subscribe('ingredienser')
  if (handle.ready()) {
    const IngredsInCat = Ingredienser.find({ categoryId: props.category._id }, { sort: { 'name.singular': 1 } }).fetch()
    onData(null, {IngredsInCat})
  }
}
