/*Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar 
que el número ingresado no contenga letras....

Ask the user to enter a number at a prompt, make the sum of all the digits, validate
that the number entered does not contain letters.
*/


var userNum = prompt("Write Number");
var convertNum = Number(userNum);

for(i=0 ; i < convertNum; i++){
    console.log(i);
    if(Number.isInteger(i)){
        
        console.log("the number entered does not contain letters");
    }else{
        console.log("Contain Letters");
    }
}