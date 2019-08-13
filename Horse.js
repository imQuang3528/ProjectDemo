function Horse(name){
	this.name=name;
}
Horse.prototype.sayHi = function() {
	console.log("hello.i'm Min....")
};
module.exports=Horse;