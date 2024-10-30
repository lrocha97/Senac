const lista = [1,2,3,4,5,6]
var soma = 0

 lista.forEach(function(valor, indice){
     if (valor % 2 == 0){
        soma += valor
     }
 })

 const resultado = soma

 console.log(resultado)