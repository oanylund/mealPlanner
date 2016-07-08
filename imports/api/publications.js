import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { check } from 'meteor/check';

// collections
import Ingredienser from '../collections/ingredienser.js';
import IngrediensKat from '../collections/ingrediensKategori.js';
import Middager from '../collections/middag.js';
import DinnerThumbs from '../collections/DinnerThumb.js';
import Uker from '../collections/uker.js';
import Handlelister from '../collections/Handleliste.js';

Meteor.publish('uker', function () {
    return Uker.find({});
});
Meteor.publish('middagsListe', function () {
    return Middager.find({},{ fields: { title: 1, description: 1, imageId: 1 } });
});
Meteor.publish('middagerAllProperties', function () {
    return Middager.find({});
});
Meteor.publish('middagImageThumbs', function () {
    return DinnerThumbs.find({});
});
Meteor.publish('dinnerSearch', function (titleFilter) {
    check(titleFilter, String);

    if( titleFilter === '' )
      return Middager.find({});

    return Middager.searchTitle(titleFilter);
});
Meteor.publish('ingrediensKat', function () {
    return IngrediensKat.find({});
});
Meteor.publish('ingredienser', function () {
    return Ingredienser.find({});
});
Meteor.publish('ingrediensSearch', function (query) {
  check(query, String);

  if ( _.isEmpty(query) )
    return this.ready();

  return Ingredienser.searchName(query);
});
Meteor.publish('handlelister', function () {
    return Handlelister.find({});
});
