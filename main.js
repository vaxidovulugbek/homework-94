
// problem 206 
// function isPrime(num) {
//   for ( var i = 2; i < num; i++ ) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function dsp(n) {
//   let arr = [2];
//   for ( let i = 3; i < n; i+=2 ) {
//       if ( isPrime(i) ) {
//           arr.push(i);
//       }
//   }
//   console.log(arr.length);
// }
// dsp(32);





// problem 207 kamchiligi bor
// let array = ['99','2','-','3','4','5','6']
// let result = []
// for (let i = 0; i < array.length; i++){
//    result.push(Number(array[i]));
// }
// console.log(result);


 
// problem 208
// function getCharacterCount(a) {
//   let b = [...a]
//   console.log(b.length);
// }
// getCharacterCount("Joke😊")


// problem 209 chiqmadi
// let a = "1bb21A2"
// let b = [...a]
// // console.log(...b);
// console.log(b);

// b.forEach(item => {
//   console.log(typeof item);
// })




// problem 215
// let myfunc = function (...arr) {
//   for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let a = arr[j + 1]
//       arr[j + 1] = arr[j] 
//       arr[j]= a
//     }
//   }
//   }
//   console.log(arr)
// }
// myfunc(1,-10,2,4,1,8)




// problem 216
// function min (arr) {
//   console.log(Math.min(...arr) );
// }
// min([1,-10,2,4,1,8])
   





// problem 217
// let s = true
// const oddOrEven =  function(argum) {
//   if (argum % 2 == 0) {
//     s = true
//   }
//   else if (argum % 2 != 0) {
//     s = false
//   }
// }
// let a = function () {
//   if (s == true) {
//     console.log("juft");
//   }
//   if (s == false) {
//     console.log("toq");
//   }
// }
// oddOrEven(10)
// a()





// problem 218 
// let arr = [1,[2,[3,4],5],6];
// let arr2 = [];
// let arr3 = [];
// function arrr (a) {
//   for(let i = 0; i < a.length; i++){
//     if (Array.isArray(a[i])){
//      a[i].forEach((item) => {
//        arr2.push(item);
//      })
//    } else{
//      arr2.push(a[i]);
//    }
//  }
// }
// arrr (arr)

// function ikki(ar) {
//   for(let i = 0; i < ar.length; i++){
//     if (Array.isArray(ar[i])){
//      ar[i].forEach((item) => {
//        arr3.push(item);
//      })
//    } else{
//      arr3.push(ar[i]);
//    }
//  }
// }
// ikki(arr2)
// console.log(arr3);






// problem 219
// const rec = function(n){
//   if (n < 18){
//     if(n === 1) return 1
//     return n * rec(n - 1)
//   }
//   else {
//     console.log("18 dan katta son kiritdingiz");
//   }
// }
// console.log(rec(10));



// problem 220
// const rec = function(n){
//   if (n < 100){
//     if(n === 1) return 1
//     return n * rec(n - 1)
//   }
//   else {
//     console.log("100 dan katta son kiritdingiz");
//   }
// }
// console.log(rec(5));












// =========================================== bu yerdan pasari xato ====================================





// function isPrimeNumber (n) {
//   function isprime(n){
//     if (n < 2){
//       return 'tub emas';
//     }
//     for (let i = 2; i < n; i++){
//       if (n % i === 0){
//         return 'tub emas';
//       }
//     }
//     return 'tub';
//   }
//   console.log(isprime(7));
// }

// isPrimeNumber(7)











// let c = []
// function evaluate(a) {
//   // console.log(...a);
//   // console.log(a.length);
//   for (let i = 0 ; i < a.length; i++) {
//     // console.log(a[i]);
//     c.push(a[i])
//   }
//   // a.forEach(el => {
//   //   console.log(el);
//   // });
//   // for (let i = 0; i < a.lenght; i++) {
//   //   console.log(a.lenght);
//   // }
//   // console.log(...a[1]);
// }
// evaluate("4[+|-]3[+|i]7[+|-]")
// console.log(c);


















// function isNumber(val){
//   return typeof val==='number';
// }

// console.log(isNumber("9"));

// let a = "1bb21A2"
// let d = map()



// let array = ['99','2','-','3','4','5','6']
// let result = []
// for (let i = 0; i < array.length; i++){

//  if (array[i] == "-"){
//     result.push(array[i] - 1)
//   }
//  if (i == "Number") {
//    result.push(Number(array[i]));
//  }
// }
// console.log(result);



// problem 216
// function min(arr) {
//   let len = arr.length, min = Infinity;
//   while (len--) {
//     if (Number(arr[len]) < min) {
//       min = Number(arr[len]);
//     }
//   }
//   console.log(min);;
// };
// min([1,-10,2,4,1,8])







// problem 206
// function isPrime(num) {
//   for ( var i = 2; i < num; i++ ) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function dsp(n) {
//   let arr = [2];
//   for ( let i = 3; i < n; i+=2 ) {
//       if ( isPrime(i) ) {
//           arr.push(i);
//       }
//   }
//   console.log(arr.length);
// }
// dsp(32);














