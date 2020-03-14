/* Crear un programa que determine si un número introducido en un popup es divisible 
por 11 y 5 o no, mostrar el resultado con console.log


Create a program that determines if a number entered in a popup is divisible
for 11 and 5 or not, display the result with console.log

*/

var  numD = prompt("Write a number");
var divisible = function(num){
    if(num % 11 === 0){
        console.log("Tu numero es divisible por 11")
    }else if(num % 5 ===0){
        console.log("tu numero es divisible por 5");
    }else{
        console.log("tu numero no es divisible ni por 11 ni por 5")
    }
};
divisible(numD);

