//parametros de função

function soma (num1, num2){
    return num1 + num2;
}

// console.log(soma(2,2));
// console.log(soma(32,62));
// console.log(soma(-500,302));

//Parâmetros x Argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e  minha idade é ${idade}`
}

// console.log(nomeIdade("Daniel", 20));

function multiplicar(number1 = 1, number2 = 1){
    return number1 * number2
}

console.log(multiplicar(soma(5, 6)))