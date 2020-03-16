let userNum = prompt('Enter Number');
let convertiruserNum = Number(userNum);

let x = 1;

let factorial = function(n){
    
    for(i=1; i <= n; i++){
        x = x * i;
        console.log(x)
}
};

factorial(convertiruserNum);
console.log(x)