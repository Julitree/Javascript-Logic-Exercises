// Find all the divisors of a number
// Encontrar todos los divisores de un número  con while


let userNum = prompt("vamos");
let convertNum = Number(userNum);
let i = 0;

let divisors = function(num){
    while(i < num){
        i++
        if(num % i == 0){
                console.log(`The divisors number of  ${num}  are ${i}`);
             }
    };
}




divisors(convertNum);


