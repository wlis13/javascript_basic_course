// let stringValue = "string";
// stringValue.pop();

// console.log("Essa linha não vai ser executada! será gerado um arro de tipo");

// Uso de captura de erro:
let booleanValue = true;
try {
    booleanValue.toUpperCase();
    console.log(booleanValue);
} catch (err) {
    console.error("Was throw a type error!");
}

try {
    throw new Error(ReferenceError());
} catch (err) {
    console.log(`This code was executed after throw new ${err}`);
}

console.log("The code continues to execute...");

try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}