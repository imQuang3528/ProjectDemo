function Callback(number,callback){
	let array=[];
	for(let i=0;i<number;i++){
		array.push(callback(number[i]));
	}
}
function Do(num){
	return num*2;
}
Callback([1,2,3],Do);