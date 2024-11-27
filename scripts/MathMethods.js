// Alguns métodos do objeto Math:

// Métodos de arredondamento:

Math.ceil() // Arredonda o número decimal para o número acima mais próximo.
Math.floor() // Arredonda o número decima para o número a baixo mais próximo.
Math.round() // Arredonda o número decima para cima caso seja x.5 abaixo disso arredonda para baixo.
Math.trunc() // Retira a parte decimal do número restando somente a parte inteira.


// Métodos aritméticos e de calculo:

Math.pow(2, 3); // Retorna o resultado da expressão de 2 ** 3.
Math.sqrt(16); // Retorna o resultado de 16².
Math.cbrt(8); // Retorna a raiz cúbica de 8³.
Math.abs(-10); // Retorna o valor absoluto o resultado é 10.

// Métodos Logarítmicos:
Math.log();
Math.log2();
Math.log10();

// Métodos que retornam o valor mínimo e máximo de uma lista:

Math.max();
Math.min();

// Métodos trigonométricos:
// Aceitam como argumento somente valores em radianos.
Math.sin();
Math.cos();
Math.tan();

let radian = Math.PI / 2;
console.log(Math.sin(radian));

// Para converter radiano em graus: graus = radiano * 180 / π
// Para converter graus em radianos: radianos = graus * π / 180

let degree = 30;
let secondDegree = 45;
let thirthDegree = 60;

radian = degree * (Math.PI / 180);
let secondRadian = secondDegree * (Math.PI / 180);
let thirthRadian = thirthDegree * (Math.PI / 180);

console.log('Valor do seno com ângulo de 30º: ' + Math.sin(radian));
console.log('Valor do seno com ângulo de 45º: ' + Math.sin(secondRadian));
console.log('Valor do seno com ângulo de 60º: ' + Math.sin(thirthRadian));

console.log('Valor do cosseno com ângulo de 30º: ' + Math.cos(radian));
console.log('Valor da tangente com ângulo de 30º: ' + Math.tan(radian));

console.log(Math.log(10));