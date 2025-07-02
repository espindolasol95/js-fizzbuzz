
// comando il numero dall 1 al 100
for (let i = 1; i <100; i++)
  //divisibile per 3 e per 5  
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // solo divisibile per 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
 //solo divisibile per 5

 else if ((i % 5 === 0)) {
    console.log ("Buzz");

    
 }

  //altrimenti solo il numero
  