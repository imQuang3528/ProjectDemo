function sumAndDo(numbers,callback){
	let array=[];
	for(let i=0;i<numbers.length;i++){
		array.push(callback(numbers[i]));
	}
	return array;
}

function Do(num){
	return num*2;
}
const mainMenu={
	init:()=>{
		mainMenu.register();
	},	
	register:()=>{
		mainMenu.loadData();
	},
	loadData:()=>{

	}
}
mainMenu.init();
sumAndDo([1,2,3],Do);