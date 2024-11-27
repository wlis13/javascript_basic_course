// PARADIGMA DA PROGRAMAÇÃO FUNCIONAL:

/* Na programação funcional, as funções retornam novos valores 
e em seguida usam esses valores em outra parte do código. */

function getDistance(mph, h) {
    return mph * h;
};

let mph = 60;
let h = 2;

let distance = getDistance(mph, h);

console.log(distance);

/* Outro estilo é a programação orientada a objetos OOP. Nesse estilo agrupamos dados e funcionalidades como
propriedades e métodos dentro de objetos. 

Por exemplo, se eu tiver um objeto virtualPet, posso atribuir a ele uma propriedade sleepy
e um método nap().
*/

let virtualPet = {
    sleepy: true,
    nap: function () { }
};


/* Na OOP os métodos atualizam as propriedades armazenadas no objeto em vez de gerar novos valores de retorno.
Por exemplo, se eu verificar a propriedade sleepy no objeto virtualPet, posso confirmar que ela está definida como true
Entretando, depois que eu executar o método nap() no objeto virtualPet, o valor da propriedade sleepy será alterado?
*/

let virtualPet2 = {
    sleepy: true,
    nap: function () {
        this.sleepy = false;
    }
}

console.log(virtualPet2.sleepy);
virtualPet.nap();
console.log(virtualPet2.sleepy);


/* A OOP nos ajuda a modelar objetos da vida real. Ela funciona melhor quando o agrupamento de propriedades
e dados em um objeto faz sentido lógico, ou seja, as propriedade e métodos "pertencem uns aos outros"
*/

let car = {
    colors: ["gray", "blue", "dark gray", "yellow", "white", "black"],
    selectedColor: null,
    hp: [350, 250, 150],
    price: [35.000, 28.000, 21.000],
    model: ["HB20R", "HB20Confort", "HB20Plus"],
    brand: "Hiundai",
    sales: 0,
    stock: 300,
    indexHp: null,
    indexPrice: null,

    selectColor: function (color) {
        this.selectColor = this.color.filter((col) => color == col);
    },
    changePrice: function (newPrice) {
        if (newPrice > 18 || typeof (newPrice) == "number") {
            this.price = newPrice;
        } else {
            return "The price needs to be above 18.000$"
        }
    },
    anotherSaler: function (price, hp, selectedColor) {
        for (let i = 0; i < this.hp.length; i++) {
            if (hp == this.hp[i]) {
                this.indexHp = i;
            }
        };

        for (let ind = 0; ind < this.price.length; ind++) {
            if (price == this.price[ind]) {
                this.indexPrice = ind;
            }
        };

        if (this.indexHp == this.indexPrice) {
            this.sales = this.sales + 1;
            this.stock = this.stock - 1;
            return {
                price: `${price.toPrecision(5)}€`,
                hp: `${hp}HP`,
                selectedColor: selectedColor,
                totalSales: `Total sales: ${this.sales}`,
                stock: this.stock,
                message: "The car was sold with successfully!"
            };
        } else {
            return "This price don't correspond with hp of car!";
        }
    }
};

console.log(car.anotherSaler(car.price[1], car.hp[1], car.colors[3]));


/* Os quatro princípios fundamentais da OOP são: herança, encapsulamento, abstração e polimorfísmo.
Os objetos existem em uma estrutura hierárquica. Isso significa que a base original ou superclasse de tudo
é a classe Object, e todos os objetos derivam dessa classe, Isso nos permite utilizar o método Object.create()
para criar ou instanciar objetos de nossas classes. */

const { list } = require("../DB.js");

const VideoGame = {
    showListGames() {
        for (let i = 0; i < this.games.length; i++) {
            console.log(`
                Name: ${this.games[i].name}
                Year of release: ${this.games[i].yearOfRelease}
                price: ${this.games[i].price}
                `)
        }
    },

    priceGame() {
        this.listPrices.forEach((price => {
            console.log(`Apenas os valores de preço: ${price}`);
        }));
    }
}

const listed = Object.create(VideoGame);
listed.games = list;
listed.listPrices = list.map((price) => price.price);

listed.showListGames();
listed.priceGame();

/*  
Um método mais comum de criar objetos a partir de classes é usar a palavra (new). Ao usar
um método construtor padrão ou vazio, o Javascript chama implicitamente a superClasse
Object para criar a instância.
*/

const { fruits } = require("../DB.js");

class Fruits {
    constructor(listFruits) {
        this.listFruits = listFruits;
    }

    showFruits() {
        for (let i = 0; i < this.listFruits.length; i++) {
            console.log(`
                Name: ${this.listFruits[i].name}
                Price per Kilo: ${this.listFruits[i].pricePerKilo}
                Validity: ${this.listFruits[i].validity}
            `)
        }
    }
};

const firstInstance = new Fruits(fruits);

firstInstance.showFruits();

/*Princípios de OOP: Herança:
Para configurar a relação de herança entre classes em Javascript, posso usar a palavar chave extends, como em classe(A) extends(B).
*/

class Apple extends Fruits {
    newMethodToAppleInstance() {
        console.log(this.listFruits);
    }
};

const appleInstance = new Apple(fruits);

appleInstance.newMethodToAppleInstance();

/* Princípios de OOP: Encapsulamento:
  Em termos mais simples, o encapsulamento tem a ver com tornar uma implementação de código "oculta"
  para outros usuários, no sentido de que eles não precisam saber como meu código funciona para "consumir"
  o código.
*/

/* Princípios de OOP: Abstração:
  A abstração tem tudo a ver com escrever o código de uma forma que o torne mais generalizado.
*/

/* Princípios da POO: Polimorfismo:
  Polimorfismo é uma palavra derivada do idioma grego que significa "multiplas formas". Uma tradução alternativa
  poderia ser: "algo que pode asumir várias forma".

  "abc".concat("def"); // 'abcdef'

  ["abc"].concat(["def"]); // ['abc', 'def']

  ["abc"] + ["def"]; // ["abcdef"]

  Isso significa que o métodoconcat() está exibindo um comportamento polimórfico,
  pois se comporta de forma diferente com base no contexto - nesse caso, com base nos tipos de dados que forneço a ele.
*/

/* 
Uso de extends e super nas classes:
*/
const { zoos } = require("../DB.js");

class Zoo {
    constructor(listZoos) {
        this.listZoos = listZoos;
    }

    listZoosName() {
        this.listZoos.forEach((zoo) => {
            console.log(`Zoos name: ${zoo.name}`);
        })
    }

    totalQuantityAnimalsInAllZoos() {
        let total;
        this.listZoos.forEach((animal) => {
            total += animal.totalAnimals;
        });
        console.log(total);
    }

};

// let count = 0;

// function recursive(count) {
//     if (count < 5) {
//         count = count + 1;
//         recursive(count);
//     }
//     console.log("Recursive function message...")
// };

// recursive(count);
