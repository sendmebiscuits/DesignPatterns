var TaskServiceModule = require('./TaskServiceModule');
var task = require('./task_facade');


var TaskServiceWrapper = function() {
    
    return {
        completeAndNotify : function(myTask) {
            TaskServiceModule.complete(myTask);
            if (myTask.completed == true) {
                TaskServiceModule.setCompleteDate(myTask);
                TaskServiceModule.notifyCompletion(myTask, myTask.user);
                TaskServiceModule.save(myTask);  
            }
        }
    }
}

module.exports = TaskServiceWrapper(); 
