var censoredWords = ["sad" , "bad" , "mad"];
var customCensorWords = [];

function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(customCensorWords[idx],"****");
	}
	for(idx in customCensorWords){
		inStr = inStr.replace(customCensorWords[idx],"****");
	}
	return inStr;
}

function addCensoredWord(word){
	customCensorWords.push(word);
}

function getCensoredWord(){
	return censoredWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord;