

Meteor.publish("uker", function () {
    return Uker.find({});
});
Meteor.publish("ingrediensKat", function () {
    return IngrediensKat.find({});
});
Meteor.publish("ingredienser", function () {
    return Ingredienser.find({});
});
Meteor.publish("ingrediensSearch", function (query) {
  check(query, String);

  if ( _.isEmpty(query) )
    return this.ready();

  return Ingredienser.searchName(query);
});
