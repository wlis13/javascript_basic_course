const object = {
  names: ["FirstName", "SecondName", "ThirthName", "fourthName"],
  age: 32,
  otherObject: {
    otherNames: ["other first name", "other second name", "other thirth name"],
  }
};

const { names } = object;
console.log(names);
console.log(`Return key names: [${Object.keys(object)}]`); // Retorna uma lista com os nomes das chaves das propriedades do objeto.["string"]
console.log(`Return values: [${Object.values(object)}]`); // Retorna uma lista com os valores das propriedades do objeto. ["string"]
console.log(Object.entries(object)); // Retorna uma matriz(listas dentro de uma lista) em que cada sublista contém o par de chave-valor de uma propriedade.