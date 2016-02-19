

Meteor.publish("uker", function () {
    return Uker.find({});
});

Meteor.publish("ingrediensKat", function () {
    return IngrediensKat.find({});
});
