var chalk=require('chalk');

function Dog(name){
	this.name=name;
}
Dog.prototype.Greeting = function() {
	console.log("hihi,Nice to meet U"+chalk.blue(this.name));
};
module.exports=Dog;