const arrSize = 30000000;
const pointLoc = arrSize - 26000000;

arr = [];
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
		sentence:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		indextest: n,
	});
}

console.log('Arr size:', arrSize, 'Point to % of arr:', ((pointLoc / arrSize) * 100).toFixed(2));

const forStartTime = performance.now();
const forArr = (ar) => {
	for (i = 0; i < ar.length; i++) {
		if (ar[i].indextest === pointLoc) {
			return ar[i];
		}
	}
};
console.log('\nFound index:', forArr(arr).indextest);
const forEndTime = performance.now();
console.log('running time using const, arrow function, for-loop:', forEndTime - forStartTime, 'ms');

const for2StartTime = performance.now().toFixed(2);
function forArr2(ar) {
	for (i = 0; i < ar.length; i++) {
		if (ar[i].indextest === pointLoc) {
			return ar[i];
		}
	}
}
console.log('\nFound index:', forArr2(arr).indextest);
const for2EndTime = performance.now();
console.log('running time using function (classic), for-loop:', for2EndTime - for2StartTime, 'ms');

const filterStartTime = performance.now().toFixed(2);
const filterArr = (ar) =>
	ar.filter(function (item) {
		return item.indextest === pointLoc;
	});
const tmparr = filterArr(arr);

console.log('\nFound index:', tmparr[0].indextest);
const filterEndTime = performance.now();
console.log('running time using const, arrow function, filter:', filterEndTime - filterStartTime, 'ms');

const filter2StartTime = performance.now().toFixed(2);
function filterArr2(ar) {
	return ar.filter(function (item) {
		return item.indextest === pointLoc;
	});
}
const tmparr2 = filterArr2(arr);
console.log('\nFound index:', tmparr2[0].indextest);
const filter2EndTime = performance.now().toFixed(2);
console.log('running time using function (classic), arrow function, filter:', filter2EndTime - filter2StartTime, 'ms');
