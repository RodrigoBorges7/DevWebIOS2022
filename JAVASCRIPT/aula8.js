// Funções
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
   }
   let x = addNums(4, 5); // Chamada da função addNums
   console.log(x);
   let z = myFunc(4, 5); // Chamada da função myFunc
   console.log(z);
   function myFunc(num1, num2) {
    return num1 * num2;
   }
   
   const hello = () => {
    return 'Olá Arrow Function!';
   };
   const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
    };
    //Arrow functions
console.clear();
const hello = () => {
return 'Olá Arrow Function!';
};
console.clear();
const addNums2 = (num1 = 1, num2 = 1) => {
return num1 + num2;
};
let soma = addNums2(5, 10);
console.log(soma);
let marca = 'Fiat';
const carro = {
type: 'Fiat',
model: '500',
color: 'white',
};
const pessoa = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    };