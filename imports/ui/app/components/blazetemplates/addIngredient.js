import { Template } from 'meteor/templating';
import Ingredienser from '../../../../api/collections/ingredienser.js';

import './addIngredient.html';

Template.addIngredient.helpers({
	Ingredienser() {
		return Ingredienser.find({});
	}
});
