/*Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se 
determine si el triángulo es válido o no.


Create a program where the three interior angles of a triangle are entered and
determine whether the triangle is valid or not.

*/

var creaTriangulo = alert('Create an equilateral triangle');
let side1 = prompt("Write number");
let side2 = prompt("Write number");
let side3 = prompt("Write number");

var cheackDates = function(){
    if(side1 === side2 && side3){
        console.log("You have a perfect equilateral triangle !!");
    }else{
        console.log("Sorry!!  with your data we can not create the triangle")
    };
}
cheackDates();