var projectRepo = function() {
    
    var get = function(project) {
        console.log('Getting project ' + project)
    
    }

    return {
        get : get
    }
}

module.exports = projectRepo();