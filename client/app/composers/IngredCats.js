export default function composer(props, onData) {
  const handle = Meteor.subscribe('ingrediensKat')
  if (handle.ready()) {
    const categories = IngrediensKat.find({}, { sort: { name: 1} }).fetch()
    onData(null, {categories})
  }
}
