var userRepo = function() {

    var get = function(user) {
        console.log('Getting user ' + user)
    }

    return {
        get : get,
    }
}

module.exports = userRepo();