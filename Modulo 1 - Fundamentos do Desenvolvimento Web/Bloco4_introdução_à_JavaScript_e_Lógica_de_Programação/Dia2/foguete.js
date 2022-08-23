let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroDeImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numeroDeImpares = numeroDeImpares + 1;
    }
}

let arr = [];
for (let i = 1; i <= 25; i += 1) {
    arr.push(i);
}
console.log(arr);

for (let i = 0; i < 25; i += 1) {
    console.log(arr[i] / 2);
}
