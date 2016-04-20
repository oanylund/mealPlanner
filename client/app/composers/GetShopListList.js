export default function composer(props, onData) {
  const handle = Meteor.subscribe('handlelister')
  if (handle.ready()) {
    const shoplists = Handlelister.find({},{
      fields: {
        name: 1,
        week: 1,
        year: 1,
        active: 1,
        archived: 1
      }
    }).fetch();
    onData(null, {shoplists});
  }
}
