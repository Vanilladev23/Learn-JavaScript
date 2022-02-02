console.log('🚀Hello world from JavaScript🚀');
// // function sum(a, b) {
//   return a + b;
// }

// arrow function
let sum = (a, b) => {
  return a + b;
};
console.log('check sum: ', sum(6, 9));

let obj = {
  name: 'Kay',
  address: 'TPHCM',
  getName: function () {
    return this.name;
  },
};
console.log('>>> Get Name obj: ', obj.getName());
// function vs method => reuse
