//prompt user for username and display it

const username = prompt("what is your name?")

//welcome user
console.log(`welcome ${username}`)
console.log(`THIS IS A NUMBER GUESSING GAME`)
console.log(`for each range given, a secret number has been chosen and you are required to guess it.`)

//variables
let Point = 0;
let Level = 1;
MaxStage = 100

console.log(`welcome to level ${Level} `)

for (let n=2; n<=100; n++){
  let comGuess = Math.floor(Math.random()*n)+1
  let userGuess = parseInt(prompt(`Guess a number between 1 and ${n}`));
  
  console.log(`you guessed ${userGuess}`);

  if(comGuess == userGuess){
    console.log(`your guess is correct`);
    console.log(`Point = ${ Point+= 1}`);
    console.log(`welcome to level ${Level +=1} `)
  } 
  else {
    console.log(`your guess is wrong`);
    console.log(`Point = ${ Point+= 0}`);
    console.log(`welcome to level ${Level +=1}`)
  }
}
