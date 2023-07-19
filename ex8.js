
// let prompt = require ('prompt-sync')()
// let idade = prompt ("digite  sua idade")

// while (idade <=18){
// console.log (idade)
// }
// console.log ("maior de idade" )

let prompt = require('prompt-sync')()
let numero = parseInt(prompt('digite sua idade:'))
while (numero <18){
    numero=parseInt(prompt('digite sua idade:'))
}
console.log('voce já atingiu sua maioridade')
