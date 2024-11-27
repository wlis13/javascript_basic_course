/* Obs:
Estudar depois: literais de modelo aninhados emodelos marcados.
*/

const animal = {

  canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (const iterator of Object.keys(bird)) {
    console.log(`${iterator}: ${bird[iterator]} `);
  }
};

// o For in pode acessar a propriedade herdada de uma objeto!!!

function animalCan() {
  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`)
  }
}

// Estruturas de dados em Javascript:

//(Map):

// Métodos principais:
// set(), get(), has(), delete(), clear(), size()

const newMap = new Map();

// Adicionar valores:
newMap.set("nome", "wlisses");
newMap.set(1, "um");
newMap.set(true, "Verdadeiro");

// Acessando valores:
console.log(newMap.get("nome"));
console.log(newMap.get(1));
console.log(newMap.get(true));
console.log(newMap);

// Verificando a existência de uma chave:
console.log(newMap.has("nome"));

// Lendo tamanho do Map:
console.log(newMap.size);

// deletar um único valor:
newMap.delete("nome");
console.log(newMap);

// deletar todos os valores:
newMap.clear();
console.log(newMap);

// (Set):

/* 
Descrição: Estrutura que armazena valores únicos, sem chaves e sem valores duplicados.
Padrões de uso: Quando quer evitar duplicatas(Ex: lista de IDs únicos).
Métodos principais: add(), has(), delete()
*/

//Exemplo:

const numbers = new Set([1, 2, 3, 4, 4]);
console.log("Valor retornado por tipo de dado Set():")
console.log(numbers);

//(WeakMap):
/* 
Descrição: Estrutura de pares chave-valor onde as chaves são sempre objetos e são fracas
(Não evitam que os objetos sejam removidos pelo garbage collector).
Padrões de uso: Para cache temporário de objetos ou dados que precisam ser eliminados com facilidade.
Métodos principais: set(), get(), has(), delete().
*/
// Exemplo:
const weakMap = new WeakMap();
const object = { nome: "Elise" };
weakMap.set(object, "IA");
console.log("Valor retornado pelo tipo de dado WeakMap:")
console.log(weakMap.nome);


//(WeakSet):
/* 
Descrição: Estrutura de dados que armazena objetos únicos de forma fraca, ou seja, sem
impredir que sejam coletados pelo garbage collector.
Padrões de uso: Quando que manter uma lista de objetos que podem ser eliminados da memória.
Métodos principais: add(), has(), delete().
*/

// Exemplo:
const weakSet = new WeakSet();
const obj = { nome: "Objeto temporário" };
weakSet.add(obj);
console.log("Valor retornado pelo tipo de dado WeakSet:")
console.log(weakSet);

// (ArrayBuffer e TypedArray):
/* 
Descrição: Estruturas para manipulação de dados binários em Javascript,
usadas principalmente para lidar com dados em alto desempenho, como buffers de audio,
vídeo ou imagem.
Padrões de uso: Quando precisa manipular bytes e otimização de desempenho para manipular dados binários.
*/

// Exemplo:
const buffer = new ArrayBuffer(8); // Cria um buffer de 8 bytes.
const view = new Int32Array(buffer); // Cria uma visão de 32 bytes sobre o buffer.

// Como converter uma objeto em uma matriz:

const obj2 = {
  name: "Wlisses",
  age: 33,
  birthday: "19/02",
  height: 1.70,
  weight: 70
};

const newList = [];

for (const key of Object.keys(obj2)) {
  newList.push(key, obj2[key])
};

console.log(newList);

/* 
Algumas estruturas de dados mais avançadas que não foram abordadas incluem:

Filas

Listas vinculadas (simples e duplamente vinculadas)

Árvores

Gráficos
*/

// Operador Spread:

const list1 = ["Madagascar", "Ilha da Reunião", "Reino Unido"];
console.log(list1);
const list2 = [...list1, "Estados Unidos", "Replública Dominicana"];
console.log(list2);

const object1 = {
  firstName: "Castlevania Symphone of the night",
  secondName: "Final fantasy Tactics",
  thirdName: "Final fantasy VII"
};

console.log(object1);

const object2 = { ...object1, fourthName: "Street Fighter Alpha 2", fifthName: "Vagrant Store" };

console.log(object2);