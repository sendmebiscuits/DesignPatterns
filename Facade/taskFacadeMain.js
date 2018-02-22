var TaskServiceWrapper = require('./taskServiceWrapper_facade');
var TaskServiceModule = require('./TaskServiceModule');
var Task = require('./taskFacade');

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
})

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);

