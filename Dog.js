var chalk=require('chalk');

function Dog(name){
	this.name=name;
}
function Greeting(){
	console.log("hihi.nice to meet U"+chalk.blue(this.name));
}
module.exports=Dog;
