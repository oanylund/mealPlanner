export default function composer(props, onData) {
  const handleIngs = Meteor.subscribe('ingrediensSearch', props.query)
  if (handleIngs.ready()) {
    let ingredsFound;
    if ( _.isEmpty(props.query) ) {
      ingredsFound = [];
    }
    else {
      ingredsFound = Ingredienser.searchName(props.query).fetch();
    }
    const handleCats = Meteor.subscribe('ingrediensKat');

    if(handleCats.ready()) {
      const CatsInSearch = _.uniq( Ingredienser.find({}, { fields: {categoryId: 1} }).fetch().map( (field) => {
        return field.categoryId;
      }))
      const categories = IngrediensKat.find({ _id: { $in: CatsInSearch } }).fetch();
      onData(null, {ingredsFound, categories});
    }
  }
}
