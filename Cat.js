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
sumAndDo([1,2,3],Do);