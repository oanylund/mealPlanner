Meteor.methods({
  deleteDinner: (id, imageId) => {
    DinnerThumbs.remove({ _id: imageId }, () => {
      Middager.remove({ _id: id });
    })
  },
  // Title
  editDinnerTitle: (id, newTitle) => {
    Middager.update({ _id: id }, {
      $set: { title: newTitle }
    });
  },

  // Description
  editDinnerDescription: (id, newDescription) => {
    Middager.update({ _id: id }, {
      $set: { description: newDescription }
    });
  },

  // Ingredients
  addIngredientToDinner: (id, newIngredient) => {
    Middager.update({ _id: id }, {
      $push: { ingredients: newIngredient }
    })
  },
  editIngredQuantityInDinner: (id, index, newQuantity) => {
    Middager.update({ _id: id }, {
      $set: { [`ingredients.${index}.quantity`]: newQuantity }
    });
  },
  deleteIngredFromDinner: (id, ingredsLeft) => {
    Middager.update({ _id: id }, {
      $set: { ingredients: ingredsLeft }
    });
  },
  moveIngredInDinner: (id, reorderedIngreds) => {
    Middager.update({ _id: id }, {
      $set: { ingredients: reorderedIngreds }
    });
  },

  // Steps
  addStepToDinner: (id, newStep) => {
    Middager.update({ _id: id }, {
      $push: { steps: newStep }
    });
  },
  deleteStepInDinner: (id, stepsLeft) => {
    Middager.update({ _id: id }, {
      $set: { steps: stepsLeft }
    });
  },
  editStepInDinner: (id, index, newVal) => {
    Middager.update({ _id: id }, {
      $set: { [`steps.${index}`]: newVal }
    });
  },
  moveStepInDinner: (id, reorderedSteps) => {
    Middager.update({ _id: id }, {
      $set: { steps: reorderedSteps }
    })
  },

  // Image
  addDinnerImage: (dinnerId, newImage) => {
    // Create new file
    var newFile = new FS.File();
    // Attach image data from blob recieved from cropper
    newFile.attachData(newImage, function (error) {
      if (error) throw error; // TODO: Handle error
      // Append "original" image name
      newFile.name("thumbnail.png");
      // Insert new image to db
      DinnerThumbs.insert(newFile, function (error, fileObj) {
        if(error) throw error; // TODO: handle insert error correctly
        // Insert new imageid referance to dinner being edited
        Middager.update({ _id: dinnerId }, {
          $set: { imageId: fileObj._id }
        });
      });

    });
  },
  changeDinnerImage: (dinnerId, oldImgId, newImage) => {
    // Remove old image from db
    DinnerThumbs.remove({ _id: oldImgId }, () => {
      // Create new file
      var newFile = new FS.File();
      // Attach image data from blob recieved from cropper
      newFile.attachData(newImage, function (error) {
        if (error) throw error; // TODO: Handle error
        // Append "original" image name
        newFile.name("thumbnail.png");
        // Insert new image to db
        DinnerThumbs.insert(newFile, function (error, fileObj) {
          if(error) throw error; // TODO: handle insert error correctly
          // Insert new imageid referance to dinner being edited
          Middager.update({ _id: dinnerId }, {
            $set: { imageId: fileObj._id }
          });
        });

      });
    });
  },
  deleteDinnerImage: (dinnerId, imageId) => {
    DinnerThumbs.remove({ _id: imageId }, () => {
      Middager.update({ _id: dinnerId }, {
        $unset: { imageId: '' }
      });
    });
  }
});
