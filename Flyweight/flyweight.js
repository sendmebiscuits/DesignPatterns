function Flyweight(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

module.exports = Flyweight;