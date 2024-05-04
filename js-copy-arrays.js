/**
Result is basically always as follows:
[
  { title: 'spread       ', time: 0.0009019999999999584 },
  { title: 'slice        ', time: 0.0009120000000031325 },
  { title: 'concat       ', time: 0.001152000000001152 },
  { title: 'object values', time: 0.0031460000000009813 },
  { title: 'for--        ', time: 0.0072729999999978645 },
  { title: 'for++        ', time: 0.018194000000001154 },
  { title: 'arr map      ', time: 0.022493000000000762 },
  { title: 'for of push  ', time: 0.1060389999999991 },
  { title: 'JSON parse   ', time: 5.753011000000001 }
]
 */
// --- random array generation
function createArr() {
	function createRandomObj(fieldCount, allowNested) {
		var generatedObj = {}

		for (var i = 0; i < fieldCount; i++) {
			var generatedObjField

			switch (randomInt(allowNested ? 6 : 5)) {
				case 0:
					generatedObjField = randomInt(1000)
					break

				case 1:
					generatedObjField = Math.random()
					break

				case 2:
					generatedObjField = Math.random() < 0.5 ? true : false
					break

				case 3:
					generatedObjField = randomString(randomInt(4) + 4)
					break

				case 4:
					generatedObjField = null
					break

				case 5:
					generatedObjField = createRandomObj(fieldCount, allowNested)
					break
			}
			generatedObj[randomString(8)] = generatedObjField
		}
		return generatedObj
	}

	// helper functions
	function randomInt(rightBound) {
		return Math.floor(Math.random() * rightBound)
	}

	function randomString(size) {
		var alphaChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		var generatedString = ''
		for (var i = 0; i < size; i++) {
			generatedString += alphaChars[randomInt(alphaChars.length)]
		}

		return generatedString
	}

	const arr = [
		29, 27, 28, 838, 22, 2882, 2, 93, 84, 74, 7, 933, 3754, 3874, 22838, 38464, 3837, 82424, 2927,
		2625, 63, 27, 28, 838, 22, 2882, 2, 93, 84, 74, 7, 933, 3754, 3874, 22838, 38464, 3837, 82424,
		2927, 2625, 63, 27, 28, 838, 22, 2882, 2, 93, 84, 74, 7, 933, 3754, 3874, 22838, 38464, 3837,
		82424, 2927, 2625, 63, 27, 28, 838, 22, 2882, 2, 93, 84, 74, 7, 933, 3754, 3874, 22838, 38464,
		3837, 82424, 2927, 2625, 63,
	]

	let i = 0
	const l = 100
	while (i < l) {
		arr.push(createRandomObj(i))
		i++
	}
	return arr
}


// --- /random array generation
let title
let start
let a
let perf
let results = []
const arr = createArr()

start = performance.now()
perf = performance.now() - start

start = performance.now()
title = 'object values'
a = Object.values(arr)
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'concat       '
a = [].concat(arr)
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'slice        '
a = arr.slice()
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'for of push  '
a = []

for (let val of arr) a.push(val)
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'spread       '
a = [...arr]
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'JSON parse   '
a = JSON.parse(JSON.stringify(arr))
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'arr map      '
a = arr.map((i) => i)
perf = performance.now() - start
results.push({ title: title, time: perf })

start = performance.now()
title = 'for++        '
a = []
for (var z = 0; z < arr.length; z++) {
	a[z] = arr[z]
}

perf = performance.now() - start
results.push({ title: title, time: perf })
start = performance.now()
title = 'for--        '
a = []
for (var z = arr.length; z > -1; z--) {
	a[z] = arr[z]
}
perf = performance.now() - start
results.push({ title: title, time: perf })

console.log(results.sort((a, b) => a.time - b.time));
