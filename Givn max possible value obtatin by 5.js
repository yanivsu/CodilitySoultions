/**
Write a function that, given an interger N, returns the maximum possible value obtainable by delete
one '5; digit from the decimal representation of N, It is guaranteed that N will contain at lease
one 5 digit.
*/

function removeByIndex(str, index) {
	return str.slice(0,index) + str.slice(index+1)
}

function solution(N) {
	let stringNumber = N.toString();
	let fives = [];
	let options = [];
	
	if(!stringNumber.includes('5')) {
		return;
	}
	
	if(!stringNumber.length> 2) {
		return;
	}
	
	for(let i = 0; i < stringNumber.length; i++) {
		if(stringNumber[i] === '5') {
			fives.push(i)
		}
	}
	
	for(let i = 0; i < fives.length; i++) {
		let stringOption = N.toString();
		let option = removeByIndex(stringOption, fives[i]);
		options.push(option)
	}
	
	return Math.max(...options)
	
}
	
	