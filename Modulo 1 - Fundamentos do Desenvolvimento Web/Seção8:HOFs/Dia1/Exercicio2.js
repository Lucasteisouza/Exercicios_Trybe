const gamble = (bet, callback) => {
  let roll = Math.floor((Math.random() * 5) +1 );
  return (callback(roll, bet) ? `Paraboains o numero soreado foi o ${bet}` : `Oh Noes, o numero sorteado não foi o ${bet}`)
}

const checker = (myNumber, Number) => myNumber === Number;

console.log(gamble(5,checker))