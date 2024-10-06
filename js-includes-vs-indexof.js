const arrsize = 50000000
const searchid = 2000000
const testcase = 1

if (testcase === 1) {
	const arr = new Array(arrsize).fill({ id: 1 })
	function testIncludes() {
		return arr.includes({ id: searchid })
	}
	console.time('includes')
	testIncludes()
	console.timeEnd('includes')
}
if (testcase === 2) {
	const arr = new Array(arrsize).fill({ id: 1 })
	function testIndexOf() {
		return arr.indexOf({ id: searchid })
	}
	console.time('indexOf')
	testIndexOf()
	console.timeEnd('indexOf')
}

// results: array size #, find  #, node - bun - chromium

// 100000, 2000
// indexof in node vs bun:
// includes:        1.6 - 1.4  - 0.1
// indexOf:         1.5 - 0.13 - 0.1
//
// 1000000, 200000
// includes:        2.1 - 5.4 - 0.7
// indexOf:	        2.2 - 0.9 - 0.5
//
// 10000000, 2000000
// includes:        7,5 - 33  - 2.4
// indexOf:         6,5 - 7,5 - 2.8
//
// 50000000, 2000000
// indexOf:  37 -  38 - 15 // NOTE: node en chromium doen wel meerdere seconden spastisch, sus...
// includes: 36 - 150 - 11 // NOTE: node en chromium doen wel meerdere seconden spastisch, sus...
