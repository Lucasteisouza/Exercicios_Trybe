let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux;
let orderedNumbers = [];

for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            aux = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = aux;
        }
    }
}

console.log(numbers);
