var fs = require('fs');
//console.log(fs.readFileSync('./cmudict.txt'));
var cmudictFile = readCmudictFile('./cmudict.txt');



function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

//splitting data into lines [word, word with syllable]
function formatData(data){    
  var lines = data.toString().split("\n");
  var lineSplit;
  var numOfSyl;
  var dictionary = {};
  lines.forEach(function(line){    
    lineSplit = line.split("  "); 
    if(lineSplit[1] == null ||lineSplit[1] == undefined || lineSplit[1].match(/\d+/g) === null ){
      if(!dictionary[lineSplit[0]]){
        dictionary[numOfSyl] = [lineSplit[0]] 
      }else{
        dictionary[numOfSyl].push(lineSplit[0])
    }
    }else{
      numOfSyl = lineSplit[1].split(" ").length;
      if(!dictionary[numOfSyl]){
        dictionary[numOfSyl] = [lineSplit[0]] 
      }else{
        dictionary[numOfSyl].push(lineSplit[0])
      }
    }
  });
  return dictionary;
}

//return all of the words in syllables
var dictionary = formatData(cmudictFile);


function createHaiku (arr){
  var haikuArray = [];
  for(var i = 0; i < arr.length; i++){
      index = Math.floor(Math.random() * dictionary[arr[i]].length);
     haikuArray.push(dictionary[arr[i]][index])
  }
  console.log(haikuArray.join("\n"))
  return haikuArray.join("\n");
}


createHaiku([2,3,4]);



function haikuFacts(structure){
    console.log("this should log a haiku with the structure " + structure);
    return structure
}


module.exports = {
  	haikuFacts: haikuFacts([2,3,4]),
    formatData: formatData(cmudictFile),

};




