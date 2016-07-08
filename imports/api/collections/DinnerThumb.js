import { FS } from 'meteor/cfs:base-package';
import { gm } from 'meteor/cfs:graphicsmagick';

var createThumb = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream)
}


const DinnerThumbs = new FS.Collection("dinnerThumbs", {
  stores: [new FS.Store.FileSystem("dinnerThumbs", { transformWrite: createThumb, path: "../../../../../images/dinnerthumbs"})]
})

DinnerThumbs.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

export default DinnerThumbs;
