Meteor.methods({
  checkWeekExists: function( weekYear ) {
    let result = Uker.find({_id: weekYear}, {fields: {_id: 1}, limit:1}).count()
    if(result) {
      return true
    }
    return false
  }
});
