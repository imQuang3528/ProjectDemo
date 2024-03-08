function Bird(name) {
    this.name = name;
}

Bird.prototype.Sing = function () {
    console.log("cheep cheep");
}

module.exports = Bird;