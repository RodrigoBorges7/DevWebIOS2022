

let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}

let i = 10,
    text = '';
do {
    text += `O número é ${i}\n`;
    i--;
} while (i > 0);
console.log(text);


for (let i = 1; i <= 100; i++) { 
    if (i % 2 == 0) console.log(`Laço For número: ${i}`); 
}