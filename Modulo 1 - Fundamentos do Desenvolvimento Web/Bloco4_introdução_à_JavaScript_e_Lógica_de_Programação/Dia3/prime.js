
let primeArr = [];
for(i = 2; i <= 50; i += 1){
    let isPrime = true;
    for(j = 2; j < i; j += 1){
        if(i % j === 0){
            isPrime = false;
        }
    }
    if(isPrime){
        primeArr.push(i);
    }
}

console.log(primeArr[primeArr.length -1])
