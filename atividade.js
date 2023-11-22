//// exercicio 1///////

let nome 

let cidade 

console.log(typeof nome);
console.log(typeof cidade);




nome = prompt('Digite seu nome')
cidade = prompt('Digite sua cidade')

console.log(typeof nome);
console.log(typeof cidade);





console.log("Olá,meu nome é ${nome} e eu moro na cidade de ${cidade}")






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////exercicio 2//////////

//Faça três perguntas diferentes ao usuário que possam ser respondidas com Sim ou Não.//
let primeiraPergunta = prompt('Você gosta de programar?')
console.log('Você gosta de programar?' , primeiraPergunta)
let segundaPergunta = prompt('Você gosta de viajar?')
console.log('Você gosta de viajar?',segundaPergunta )
let terceiraPergunta = prompt('Você tem animal de estimação?')
console.log('Você tem animais de estimação?' , terceiraPergunta)

let x = 5
let y =10

[x,y]=[y,x]

z = x
x = y
y = z

console.log("Troquei valores x = 10", x)
console.log("Troquei valores y= 5 " ,y)//








////////////exercicio3////////
let primeiroNumero = Number(prompt('Insira seu primeiro número'))
let segundoNumero = Number(prompt('Insira seu segundo número'))

let somar = primeiroNumero+segundoNumero
console.log(somar)

let multiplicar = primeiroNumero*segundoNumero
