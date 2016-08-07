import { Meteor } from 'meteor/meteor'
import Middager from '../../../api/collections/middag'

export default function composer({ titleFilter, limit }, onData) {
  const totalCount = Middager.searchTitle(titleFilter).count();
  const handleDinners = Meteor.subscribe('dinnerSearch', titleFilter);
  if (handleDinners.ready()) {
    const dinners = Middager.searchTitle(titleFilter, limit).fetch();
    onData(null, { dinners, totalCount });
  }
}
