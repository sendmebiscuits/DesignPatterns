var taskHandler = require('./taskHandler');
var myRepo = require('./Repo')();

myRepo.save('fromMain')
myRepo.save('fromMain')
myRepo.save('fromMain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();







// A singleton can be made by calling an object during exporting.
// When calling module.exports = object(), Node.js stores that instance
// of the return object (whatever the function or object returns). 