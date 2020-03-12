// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

// Show all numbers from N to 1 decreasing from 1 to 1 where n is entered by the user at a prompt.

let usuarioNumber = prompt("Ingresar Numero");
let convertNumber = Number(usuarioNumber);

disNumer=(num)=>{
   for(i=convertNumber; i > 0  ; i--){
       document.write(i + " ");
   }
} 

disNumer(convertNumber);

