//escreva um programa que calcula 
//a soma dos numeros de 1 a 100
//utilizando o loop

// SOMA1------------------------------------------------------------

// let soma = 0

// for(let i = 1; i <= 100; i++) {

//     soma += i;

// }
// console.log('A soma dos números é: ', soma )


// SOMA2-----------------------------------------------------------

// let i = 0, soma2 = 0

// while (i <= 100) {
//     soma2 += i
//     i++
// }

// console.log('A soma dos números : ', soma2)


// SOMA3----------------------------------------------------------

// const lista =  []

// for (let i=0; i<=100;i++) {

// }


// ARGUMENTS-------------------------------------------------------

// function somar() {
//     let soma = 0

//     for(i in arguments) {
//         soma += arguments [i]
//     }
//     return soma
// }


// console.log(somar())
// console.log(somar(1,2))
// console.log(somar(1.1, 2.2, 3.3))
// console.log(somar(' olá', ' mundo'))
// console.log(somar(3, 4, ' já deu'))


//========================================================

// function soma(a, b) {
//     console.log(`O valor de a é ${a}`) //é execcutado
//     return a + b;
//     console.log(`O valor de b é $[b]`) //não é executador
// }

// let resultado = soma(3, 5);
// console.log(resultado);


function soma(a, b){
    console.log(`O valor de a é ${a}`)
    
    console.log(`O valor de b é ${b}`)
    
    return a > b; 
}

let resultado = soma(a > b)