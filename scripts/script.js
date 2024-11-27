const { dataBase } = require("./DB.js");

let name = "Wlisses";

console.log(name.length);

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);

}
console.log(dataBase);

console.log(Number(5).toFixed(2));
console.log(Number(150).toPrecision(1));


// DIFERENÇA ENTRE OS MÉTODOS toPrecision() e toFixed():

/* toPrecision() lida com o número total de dígitos significativos (antes e depois da vírgula), podendo incluir notação científica se necessário.
toFixed() controla apenas o número de casas decimais após o ponto, arredondando se necessário, mas sem mudar o valor inteiro. */

// EXPLICAÇÃO SOBRE NOTAÇÃO CIENTÍFICA:

/* O número 1.5e+2 está em notação científica, onde o e+2 significa que o número deve ser multiplicado por 10 elevado a 2 (ou seja, 10²).

Então, para converter 1.5e+2 em decimal, fazemos o seguinte cálculo:
1.5 * 10 2 = 1.5 * 100=150 

Agora, e- (com o sinal negativo) funciona da mesma forma, mas a potência é negativa:

Por exemplo, 1e-3 é o mesmo que 1 / 10³, ou seja, 0.001.
Outro exemplo: 3.2e-4 é igual a 3.2 / 10 ** 4, ou seja, 0.00032.
Então, no seu exemplo, se você vir e+10, isso significa 10 elevado à décima potência:

1e+10 = 1 * 10**10 =10000000000

*/