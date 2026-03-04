import leia from 'readline-sync';

let pares = 0;
let impares = 0;

for(let contador = 1; contador <= 10; contador++){

    let numero = leia.questionInt(`Digite o ${contador}º numero: `);

    if(numero % 2 == 0){
        pares++;
    }else{
        impares++;
    }

}

console.log("Total de numeros pares:", pares);
console.log("Total de numeros impares:", impares);