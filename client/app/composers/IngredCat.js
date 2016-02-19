export default function composer(props, onData) {
  const handle = Meteor.subscribe('ingrediensKat')
  if (handle.ready()) {
    const category = IngrediensKat.findOne({ name: props.category })
    onData(null, {category})
  }
}
