Meteor.methods({
  checkWeekExists: function( weekYear ) {
    let result = Uker.find({_id: weekYear}, {fields: {_id: 1}, limit:1}).count()
    if(result) {
      return true
    }
    return false
  },
  getDinnerCount: function(titleFilter) {
    if( titleFilter === '') {
      return Middager.find({}).count();
    }
    else {
      return Middager.searchTitle(titleFilter).count();
    }
  },
  getDinners: function( offset, limit, titleFilter ) {
    if( titleFilter === '' ) {
      return Middager.find({}, { limit: limit, skip: offset }).fetch();
    } else {
      return Middager.searchTitle(titleFilter).fetch();
    }
  }
});
