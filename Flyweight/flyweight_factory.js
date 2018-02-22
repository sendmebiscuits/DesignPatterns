var Flyweight = require('./flyweight');

var FlyweightFactory = function() {
    var flyweights = {};
    var get = function(project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = 
                new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed]
    }
    var getCount = function() {
        var count = 0;
        for (var f in flyweights) count ++;
        return count;
    }
    return {
        get : get,
        getCount : getCount
    }
}

module.exports = new FlyweightFactory;
