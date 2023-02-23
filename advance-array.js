const numbers = [4, 5, 6, 7, 8, 9, 0];

const answer = ['This is your answer'];

const a = numbers.forEach((n) => {
    answer.push(n * 50);    
});

console.log (answer);