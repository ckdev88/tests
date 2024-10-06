const arrSize = 20000000
const pointLoc = arrSize - 1600
const pointLocReversed = arrSize - pointLoc

let arr = []
for (let n = 0; n < arrSize; n++) {
	arr.push({
		testingstring: 'stringtest',
		testingnum: 1231,
		longtekst:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		longtekst2:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		longtekst3:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		sentence:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		indextest: n,
	})
}

let results = []
let steps=0
let starttime

function runtests() {
	results = []
	console.log('startings tests...')

	function test1() {
		starttime = performance.now()
		const getNewArr = () => {
			for (let i = 0; i < arr.length; i++)
				if (arr[i].indextest === pointLoc) return arr[i].indextest
		}
		const steps = getNewArr()
		results.push({
			title: 'const arrow func, for-loop',
			timer: Math.floor(performance.now() - starttime),
			steps: steps,
		})
		setTimeout(() => test2(), 500)
	}

	function test2() {
		starttime = performance.now()
		function getNewArr() {
			return arr.filter(function (item) {
				return item.indextest === pointLoc
			})
		}
		const steps = getNewArr()[0].indextest

		results.push({
			title: 'classic function, filter',
			timer: Math.floor(performance.now() - starttime),
			steps: steps,
		})

		setTimeout(() => test3(), 500)
	}

	function test3() {
		starttime = performance.now()
		const getNewArr = () =>
			arr.filter(function (item) {
				return item.indextest === pointLoc
			})
		const steps = getNewArr()[0].indextest

		results.push({
			title: 'const arrow funct, filter',
			timer: Math.floor(performance.now() - starttime),
			steps: steps,
		})

		setTimeout(() => test4(), 500)
	}

	function test4() {
		starttime = performance.now()
		const max = arr.length
		for(let i = 0; i < max; i++) {
			if (arr[i].indextest === pointLoc) {
				steps = arr[i].indextest
				break
			}
		}
		results.push({
			title: 'for++',
			timer: Math.floor(performance.now() - starttime),
			steps: steps,
		})
		setTimeout(() => test5(), 1500)
	}

	function test5() {
		starttime = performance.now()
		for (let i = arr.length - 1; i > -1; i--) {
			if (arr[i].indextest === pointLocReversed) {
				steps = arr[i].indextest
				break
			}
		}
		results.push({
			title: 'for--',
			timer: Math.floor(performance.now() - starttime),
			steps: steps,
		})

		setTimeout(() => console.log(results.sort((a, b) => a.timer - b.timer)), 500)
	}

	test1()
}
runtests()
