let car = {};

car.mileage = 98765;
car.color = "Red";

console.log(car);

car.turnTheKey = function () {
    console.log("The engine is running!");
}

car["lightsOn"] = function () {
    console.log("The lights are on!");
}

car.turnTheKey();
car.lightsOn();

console.log(car);
