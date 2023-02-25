
// Map Filter Reduce

const numberList = [100, 42, 324, 253, 235, 432, 25, 5, 345, 2346, 3426, 436, 2, 4513, 5];
const multiplyFunction = numberList.map((a) => {
    return a * 0;
});
console.log('This is your answer' + multiplyFunction);




const shortFunction = numberList.filter(a => a > 100);
console.log(shortFunction);



const accumulatorFunction = numberList.reduce((acc, a) => {
    return acc + a;
}, 0);
console.log('Reduce', accumulatorFunction);





const answer = [];
const anOtherFunction = numberList.forEach((a) => {
    answer.push(a * 0);
});
console.log('This is your answer' + answer);





// const numbersList = [12, 54, 1, 45, 451, 561, 61, 4131, 513, 6, 146, 16, 51];

// const multiplyFunction = numbersList.map((numbers) => {
//     return numbers * 10;
// });

// console.log('This is your answer ' + multiplyFunction);
// // ____________________________________________________________
// const answer = [];

// const arrayFunction = numbersList.forEach((numb) => {
//     answer.push(numb * 5);
// });

// console.log('This is your another answer ' + answer);


