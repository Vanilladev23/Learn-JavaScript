console.log('🚀Hello world from JavaScript🚀');
let arrTop4 = ['Man city', 'Liverpool', 'MU', 'Chelsea'];

let i = 0;
while (i < arrTop4.length) {
  i++;
  if (arrTop4[i] === 'Chelsea') {
    console.log('Found it: ', arrTop4[i]);
    continue;
  }
  console.log('>>> check i: ', i);
}
