
var haiku = require('./haiku');



//generate Haiku
var dictionary = haiku.formatData;
var testArr = [5,7,5];

function createHaiku (arr, text){
	var haikuArray = [];
	for(var i = 0; i< arr.length; i++){
			index = Math.floor(Math.random() * dictionary[arr[i]].length -1);
			haikuArray.push(dictionary[arr[i]][index])
	}
	return haikuArray.join("/n")
}

console.log(createHaiku(testArr, dictionary))


