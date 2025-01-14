for (let i=1; i <=1000; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("penemachacado");
    }else if ( i % 3 === 0){
        console.log("pescado con papas");
    }else if ( i % 5 === 0){
        console.log("tacos de rajas");
    }else {
        console.log(i);
    }
}
let j = 1

while ( j < 1001 ){
    if ( j % 3 === 0 && j % 5 === 0 ){
        console.log("FizzBuzz");
    } else if ( j % 3 === 0 ){
        console.log("Fizz");
    } else if ( j % 5 === 0 ){
        console.log("Buzz");
    } else {
        console.log(j);
    }
    j++;
}