function A() { return obj; }
function B() { return obj; }

let obj = {};

let a = new A();
let b = new B();

alert( a == b ); // true