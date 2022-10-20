
const username = prompt ('Enter your user name')
for (let i = 2; i <= 2; i++) {
    let conGuess = Math.floor(Math.random() * i )+ 1;
    let userGuess = parseInt(prompt(`Predict the number that is generated for you betweem 1 and ${i}`));
    
    if (userGuess === conGuess) {
      console.log('you have 5 point, you can now move to the next stage, '  )
      
    }else{
      console.log('Game over')
    }
}