var chalk=require("chalk");
function Dog(name){
	this.name=name;
}
Dog.prototype.sayHi = function() {
	console.log("hello.my dog is "+ chalk.blue(this.name))
};
module.exports=Dog;