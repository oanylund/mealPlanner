Meteor.methods({
  addWeek: function( week ) {
    try {
      check( week, Uker.simpleSchema() );
    }
    catch(err) {
      console.log(err.message);
    }
    // Handle our insert.
  }
});
