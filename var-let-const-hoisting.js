console.log('vartest:', vartest); // undefined
var vartest = 'value of vartest';
console.log('vartest:', vartest);

// console.log('lettest:', lettest); // ReferenceError: Cannot access 'consttest' before initialization
let lettest = 'value of lettest';
console.log('lettest:', lettest);

// console.log('consttest:', consttest); // ReferenceError: Cannot access 'consttest' before initialization
const consttest = 'value of consttest';
console.log('consttest:', consttest);
