/*Crear un programa donde se introduzcan los tres datos y estos se conviertan a numeros enteros 
Create a program where the three data are entered and these switch to integers numbers */


let firstDato = prompt("Type first angle")
let secondDato = prompt("Type second angle")
let thirdDato = prompt("Type third angle")
let angles =[firstDato, secondDato, thirdDato];
let integers = [];

for(i=0; i<angles.length; i++){
    //+angles[i] convierte string a numeros enteros
    angles[i] = +angles[i];
    integers.push(angles[i]);
}

console.log(integers);