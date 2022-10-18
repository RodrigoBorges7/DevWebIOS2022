/* CRIANDO Array unidimensional */
 
var array1 = ["Marcelo", 15, "Colin", 47, true]
console.log(array1);
console.log(array1[2])
console.clear()
array1[3] = 80;
console.log(array1)

/* Array bidimensional */

var array2 = [

    ["pipoca", 10, false],
    ["string", 20, true],
    ["margarina", 12, false]
]
console.log(array2)
console.log(array2[2][0]);
console.clear()
array2[1][0] = "Salsicha";
console.log(array2);

console.clear()
/*Array de objeto carro*/
var carro = ["uno", 1998, "0km", false, 2];
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro)
console.log(carro)
console.log(x)
/* Transform array em string e add um novo separador*/
console.clear()
var y = carro.join(" ? ")
console.log(carro)
console.log(x)
console.log(y)
/*Retorna o tamanho do array*/
console.log(carro.length)
console.clear()
/* Retira o elemento no final do array
var t = carro.pop()
console.log(carro)
console.log(t)
console.clear()
/*Insere uma informacao no final do seu arrey*/
console.clear()
var u = carro.push('Lego')
console.log(carro)
console.log(u)
/* Remove o elemento do inicio do array*/
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)
/*Adiciona a informacao no inicio do array*/
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)
/*Apagar um elemento do array em uma posicao pra selecionar*/
delete carro[1]
console.log(carro)