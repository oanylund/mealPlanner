import alt from "../alt"
import LagMiddagActions from '../actions/LagMiddagActions'
import { Meteor } from 'meteor/meteor'
import DinnerThumbs from '../../../api/collections/DinnerThumb'

class LagMiddagStore {
  constructor() {
    this.dinnerObj = {
      title: '',
      description: '',
      ingredients: [],
      steps: [],
      imageId: null
    }
    this.changeObj = {
      titleHasBeenChanged: false,
      descHasBeenChanged: false,
      ingredHasBeenAdded: false
    }
    this.validSteps = {
      titleAndDesc: {
        valid: false,
      },
      ingredients: {
        valid: false
      },
      steps: {
        valid: false
      },
      image: {
        added: false
      }
    }
    this.images = {
      original: null,
      thumb: null
    }
    this.bindActions(LagMiddagActions)
  }


  // Title and description handlers
  validateTitleAndDesc() {
    if( this.dinnerObj.title.length > 0 && this.dinnerObj.description.length > 0 ) {
      this.validSteps.titleAndDesc.valid = true
    }
    else {
      this.validSteps.titleAndDesc.valid = false
    }
  }
  onTitleFieldChanged(newVal) {
    this.dinnerObj.title = newVal;
    let titleHasBeenChanged = this.changeObj.titleHasBeenChanged;
    if (!titleHasBeenChanged)
      this.changeObj.titleHasBeenChanged = true;
    this.validateTitleAndDesc()
  }
  onDescFieldChanged(newVal) {
    this.dinnerObj.description = newVal
    let descHasBeenChanged = this.changeObj.descHasBeenChanged;
    if (!descHasBeenChanged)
      this.changeObj.descHasBeenChanged = true;
    this.validateTitleAndDesc()
  }


  // Ingredient handlers
  onAddIngredient(newIngred) {
    this.dinnerObj.ingredients.push(newIngred);
    if(!this.changeObj.ingredHasBeenAdded)
      this.changeObj.ingredHasBeenAdded = true;
    this.validateIngredients()
  }
  onDeleteIngredient(delIndex) {
    this.dinnerObj.ingredients.splice(delIndex,1);
    this.validateIngredients();
  }
  onMoveIngredientUp(index) {
    if( index > 0 ) {
      let tmp = this.dinnerObj.ingredients.splice(index,1);
      this.dinnerObj.ingredients.splice(index-1,0,tmp[0]);
    }
  }
  onMoveIngredient(indexes) {
    let tmp = this.dinnerObj.ingredients.splice(indexes.old,1);
    this.dinnerObj.ingredients.splice(indexes.new,0,tmp[0]);
  }
  onMoveIngredientDown(index) {
    let tmp = this.dinnerObj.ingredients.splice(index,1);
    this.dinnerObj.ingredients.splice(index+1,0,tmp[0]);
  }
  onEditIngredientQuantity(newQuantity) {
    this.dinnerObj.ingredients[newQuantity.index].quantity = newQuantity.quantity;
  }
  validateIngredients() {
    if( this.dinnerObj.ingredients.length > 0) {
      this.validSteps.ingredients.valid = true;
    }
    else {
      this.validSteps.ingredients.valid = false;
    }
  }


  // Steps handlers
  onAddStep(newStep) {
    this.dinnerObj.steps.push(newStep);
    this.validateSteps();
  }
  onDeleteStep(delIndex) {
    this.dinnerObj.steps.splice(delIndex,1);
    this.validateSteps();
  }
  onEditStep(editStepObj) {
    this.dinnerObj.steps[editStepObj.index] = editStepObj.newTxt;
  }
  onMoveStep(indexes) {
    let tmp = this.dinnerObj.steps.splice(indexes.old,1);
    this.dinnerObj.steps.splice(indexes.new,0,tmp[0]);
  }
  onMoveStepUp(index) {
    if( index > 0 ) {
      let tmp = this.dinnerObj.steps.splice(index,1);
      this.dinnerObj.steps.splice(index-1,0,tmp[0]);
    }
  }
  onMoveStepDown(index) {
    let tmp = this.dinnerObj.steps.splice(index,1);
    this.dinnerObj.steps.splice(index+1,0,tmp[0]);
  }
  validateSteps() {
    if( this.dinnerObj.steps.length > 0) {
      this.validSteps.steps.valid = true;
    }
    else {
      this.validSteps.steps.valid = false;
    }
  }


  // image handlers
  onAddImage(image) {
    this.images.original = image;
  }
  onAddImageThumb(thumb) {
    this.images.thumb = thumb;
    this.validSteps.image.added = true;
  }
  onResetImages() {
    this.images.thumb = null;
    this.validSteps.image.added = false;
  }
  _addThumbToDb() {
    const thumb = this.images.thumb;

    return new Promise( (res,rej) => {

      var newFile = new FS.File();

      newFile.attachData(thumb, function (error) {
        if (error) throw error; // TODO: Handle error

        newFile.name("thumbnail.png");
        DinnerThumbs.insert(newFile, function (error, fileObj) {
          if(error) throw error; // TODO: handle insert error correctly
            res(fileObj._id);
        });

      })

    }).then( (id) => {
      return id;
    })
  }
  _prepareIngredsForDb() {
    let dbReady = this.dinnerObj.ingredients.map( (ingred) => {
      return { quantity: ingred.quantity, ingredientId: ingred._id }
    });
    return dbReady
  }
  _insertDepsToIngredsAndResetStore(err, newDinnerId) {
    if (err) throw err;
    this.dinnerObj.ingredients.forEach( (ingred) => {
      Meteor.call('addIngredDinnerDep', ingred._id, newDinnerId);
    });
    alt.recycle(thisStore);
  }
  onAddDinnerToDb() {
    let newDinner = {
      title: this.dinnerObj.title,
      description: this.dinnerObj.description,
    }

    newDinner.ingredients = this._prepareIngredsForDb();

    if( this.validSteps.steps.valid ) {
      newDinner.steps = this.dinnerObj.steps;
    }

    if( this.validSteps.image.added ) {
       this._addThumbToDb().then( (id) => {
         newDinner.imageId = id;
         Meteor.call('addDinner', newDinner, this._insertDepsToIngredsAndResetStore.bind(this));
       });
    }
    else {
      Meteor.call('addDinner', newDinner, this._insertDepsToIngredsAndResetStore.bind(this));
    }
  }
}

let thisStore = alt.createStore(LagMiddagStore, 'LagMiddagStore')

export default thisStore
