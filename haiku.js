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
formatData(cmudictFile);

/*
//splitting up into syllable
function getNumOfSyl(data){       
    return data[1].split(" ").length;
}  


//construct data base with number of syllable

function sortBySyllable (data){
  var wordBySyllable = {};
  for(var i =0; i< data.length; i++){
    var numOfSyl = getNumOfSyl(data[i]);
    if(!wordBySyllable[numOfSyl]){
      wordBySyllable[numOfSyl] = [data[i][0]] 
    }else{
      wordBySyllable[numOfSyl].push(data[i][0])
    }
  }
  return wordBySyllable
}

var sylDatabase = sortBySyllable(listOfWords);
console.log(sylDatabase)

//get random word
*/


function haikuFacts(structure){
    console.log("this should log a haiku with the structure " + structure);
    return structure
}


module.exports = {
  	haikuFacts: haikuFacts([5,7,5]),
    formatData: formatData(cmudictFile),

};




