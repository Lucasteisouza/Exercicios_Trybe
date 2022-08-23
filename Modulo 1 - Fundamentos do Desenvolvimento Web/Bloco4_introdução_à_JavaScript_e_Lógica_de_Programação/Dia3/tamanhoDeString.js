let array = ['java', 'javascript', 'python', 'html', 'css'];
let largestString = ''
for(i = 0; i < array.length; i += 1){
    if (array[i].length > largestString.length){
        largestString = array[i];
    }
}
console.log (largestString)

let smallestString = largestString

for(i = 0; i < array.length; i += 1){
    if (array[i].length < smallestString.length){
        smallestString = array[i];
    }
}

console.log(smallestString)