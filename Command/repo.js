var repo = {
    tasks : {},
    commands : [],
    get : function (id){
        console.log('Getting task ' + id);
        return {
            name : 'new task from db'
        }
    },
    save : function(task) {
        console.log('Saving ' + task.name + ' to the db');
    }
}

repo.execute = function(name){
    var args = Array.prototype.slice.call(arguments, 1);

    
}



