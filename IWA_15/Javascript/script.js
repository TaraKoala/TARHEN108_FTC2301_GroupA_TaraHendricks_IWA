// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first  = data.lists || {}
const second = data.lists || {}
const third = data.lists || {}

const result = []

const extractBiggest = () => {
	if (first[first.length - 1] > second[second.length - 1]) {
		return first.pop()
	}

	if (third[third.length - 1] < second[second.length - 1] ) {
		return second.pop()
	} else {
		return third.pop()
	}
		
}

//The pop() method removes (pops) the last element of an array.

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)