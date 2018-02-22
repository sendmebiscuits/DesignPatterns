var FlyweightFactory = require('./flyweight_factory');
var flyweight = FlyweightFactory.Flyweight;

var Task = function(data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user,
        data.completed);
    this.name = data.name;
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
}

module.exports = Task;