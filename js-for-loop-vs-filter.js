const arrSize = 20000000;
const pointLoc = arrSize - (arrSize - 1600);

let arr = [];
for (n = 0; n < arrSize; n++) {
	arr.push({
		testingstring: 'stringtest',
		testingnum: 1231,
		longtekst:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		longtekst2:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		longtekst3:
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		sentence: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		indextest: n,
	});
}

console.log('Arr size:', arrSize, 'Point to % of arr:', ((pointLoc / arrSize) * 100).toFixed(2));

function runtests(arr) {
	function test1(arr) {
		const starttime = performance.now();
		const newArr = (ar) => {
			for (i = 0; i < ar.length; i++) {
				if (ar[i].indextest === pointLoc) {
					return ar[i];
				}
			}
		};

		console.log('Found index:', newArr(arr).indextest);
		console.log(
			'running time using const, arrow function, for-loop:',
			(performance.now() - starttime).toFixed(2),
			'ms'
		);

		setTimeout(() => {
			console.log('\nstart test 2...');
			test2();
		}, 1000);
	}

	function test2() {
		const starttime = performance.now();
		function getNewArr(ar) {
			return ar.filter(function (item) {
				return item.indextest === pointLoc;
			});
		}
		const newArr = getNewArr(arr);

		console.log('Found index:', newArr[0].indextest);
		console.log(
			'running time using function (classic), arrow function, filter:',
			(performance.now() - starttime).toFixed(2),
			'ms'
		);

		setTimeout(() => {
			console.log('\nstart test 3...');
			test3();
		}, 1000);
	}

	function test3() {
		const starttime = performance.now();
		const getNewArr = (ar) =>
			ar.filter(function (item) {
				return item.indextest === pointLoc;
			});
		const newArr = getNewArr(arr);

		console.log('Found index:', newArr[0].indextest);
		console.log('running time using const, arrow function, filter:', (performance.now() - starttime).toFixed(2), 'ms');

		setTimeout(() => {
			console.log('\nstart test 4...');
			test4();
		}, 1000);
	}

	function test4() {
		const starttime = performance.now();
		function newArr(ar) {
			for (i = 0; i < ar.length; i++) {
				if (ar[i].indextest === pointLoc) {
					return ar[i];
				}
			}
		}

		console.log('Found index:', newArr(arr).indextest);
		console.log('running time using function (classic), for-loop:', (performance.now() - starttime).toFixed(2), 'ms');
		setTimeout(() => {
			console.log('\nstart test 5...');
			test5(arr);
		}, 1000);
	}
	function test5() {
		const starttime = performance.now();
		const newArr = [];
		function getNewArr(ar) {
			for (i = 0; i < ar.length; i++) {
				if (ar[i].indextest === pointLoc) {
					newArr.push(ar[i]);
				}
			}
		}
		getNewArr(arr);

		console.log('Found index:', newArr[0].indextest);
		console.log(
			'running time using function (classic), for-loop, begin to end:',
			(performance.now() - starttime).toFixed(2),
			'ms'
		);
		setTimeout(() => {
			console.log('\ntest 5 ended');
		}, 1000);
	}
	console.log('\nstart test 1...');
	test1(arr);
}
runtests(arr);
