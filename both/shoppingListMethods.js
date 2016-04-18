import _ from 'underscore'

if( Meteor.isServer ) {
  Meteor.methods({
    generateShoppingList: (newList) => {
      // Check if id is stringtype or throw error
      check(newList.weekPlanId, String);

      // Get weekplan from db
      const weekPlanDays = Uker.findOne({ _id: newList.weekPlanId }, { fields: { _id: 0, name: 1, days: 1 } });
      const weekPlanName = weekPlanDays.name;

      // Push all dinner ids in weekplan into array
      let dinnerIdList = [];
      _.each(weekPlanDays.days, (day) => {
        if (day.dinnerId) {
          dinnerIdList.push(day.dinnerId);
        }
      });

      // Get dinners ingredients from db
      const allDinners = Middager.find({ _id: { $in: dinnerIdList } }, {
        fields: { _id: 0, ingredients: 1 } }).fetch();

      // Flatten ingredient objects into one array
      let allIngredients = [];
      allDinners.forEach( (dinner) => {
        allIngredients = allIngredients.concat(dinner.ingredients);
      });

      // Sort ingredients into object with ingredientId as key
      const sortedIngredients = _.groupBy(allIngredients, (ingredObj) => {
        return ingredObj.ingredientId;
      });

      // Create array with object that contain ingredientId
      // and accumulated quantities for the whole week
      const accumulatedIngredientIds = _.map(sortedIngredients, (ingArr, ingId) => {
        let accQuantity = 0;
        ingArr.forEach( (ing) => {
          accQuantity += ing.quantity;
        });
        return {
          ingredientId: ingId,
          accQuantity: accQuantity
        }
      });

      // Fetch ingredient properties from db
      const fetchIngredList = Object.keys(sortedIngredients);
      const dbIngred = Ingredienser.find({ _id: { $in: fetchIngredList } }, {
        fields: { _id: 1, name: 1, unit: 1 } }).fetch();

      // Create id key for easy access to props
      const ingredProps = _.indexBy(dbIngred, '_id');

      const ingredStringList = accumulatedIngredientIds.map( (ingred) => {
        const { ingredientId, accQuantity } = ingred;
        const { name, unit } = ingredProps[ingredientId];

        // Get correct names for name and unit. can be that only one of plural or singular exists
        const ingNameSingular = name.singular || name.plural;
        const ingNamePlural = name.plural || name.singular;
        const ingUnitSingular = unit.singular || unit.plural;
        const ingUnitPlural = unit.plural || unit.singular;
        const ingName = accQuantity === 1 ? ingNameSingular : ingNamePlural;
        const ingUnit = accQuantity === 1 ? ingUnitSingular : ingUnitPlural;

        return { itemString: `${accQuantity} ${ingUnit.toLowerCase()} ${ingName}` }
      });

      return Handlelister.insert({
        name: newList.name,
        week: newList.week,
        year: newList.year,
        weekPlan: {
          name: weekPlanName,
          id: newList.weekPlanId
        },
        listItems: ingredStringList
      }, (err, shopListId) => {
        if (err) throw err;
        Meteor.call('addWeekShopListDep', newList.weekPlanId, shopListId);
      });

    },
  });
}
