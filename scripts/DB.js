const dataBase = [
    {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        price: 15000,
        color: "White",
        mileage: 40000
    },
    {
        id: 2,
        brand: "Honda",
        model: "Civic",
        year: 2020,
        price: 18000,
        color: "Black",
        mileage: 30000
    },
    {
        id: 3,
        brand: "Ford",
        model: "Focus",
        year: 2017,
        price: 12000,
        color: "Silver",
        mileage: 50000
    },
    {
        id: 4,
        brand: "Chevrolet",
        model: "Malibu",
        year: 2019,
        price: 16000,
        color: "Red",
        mileage: 35000
    },
    {
        id: 5,
        brand: "Tesla",
        model: "Model 3",
        year: 2021,
        price: 40000,
        color: "Blue",
        mileage: 10000
    }
];

const list = [
    {
        name: "Nintendo Entertainment System (NES)",
        yearOfRelease: 1983,
        price: 250
    },
    {
        name: "Sega Genesis (Mega Drive)",
        yearOfRelease: 1988,
        price: 150
    },
    {
        name: "Atari 2600",
        yearOfRelease: 1977,
        price: 200
    }
];

const fruits = [
    {
        name: "Maçã",
        pricePerKilo: 3.5, // em euros, por exemplo
        validity: "5 dias"
    },
    {
        name: "Banana",
        pricePerKilo: 1.8,
        validity: "7 dias"
    },
    {
        name: "Laranja",
        pricePerKilo: 2.2,
        validity: "10 dias"
    }
];

const zoos = [
    {
        name: "City Zoo",
        speciesCount: 5,
        species: [
            { name: "Lion", quantity: 4 },
            { name: "Elephant", quantity: 2 },
            { name: "Giraffe", quantity: 3 },
            { name: "Monkey", quantity: 12 },
            { name: "Tiger", quantity: 2 }
        ],
        totalAnimals: 23,
        operatingDays: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
        staff: [
            { name: "João", role: "Veterinarian", workingHours: "40 hours/week" },
            { name: "Maria", role: "Janitor", workingHours: "30 hours/week" },
            { name: "Carlos", role: "Tour Guide", workingHours: "20 hours/week" }
        ]
    },
    {
        name: "Exotic Animal Park",
        speciesCount: 3,
        species: [
            { name: "Panda", quantity: 2 },
            { name: "Kangaroo", quantity: 5 },
            { name: "Snake", quantity: 10 }
        ],
        totalAnimals: 17,
        operatingDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        staff: [
            { name: "Ana", role: "Veterinarian", workingHours: "40 hours/week" },
            { name: "Pedro", role: "Janitor", workingHours: "25 hours/week" },
            { name: "Mariana", role: "Tour Guide", workingHours: "20 hours/week" }
        ]
    },
    {
        name: "Wildlife Reserve",
        speciesCount: 4,
        species: [
            { name: "Bear", quantity: 3 },
            { name: "Eagle", quantity: 6 },
            { name: "Wolf", quantity: 8 },
            { name: "Rhinoceros", quantity: 1 }
        ],
        totalAnimals: 18,
        operatingDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
        staff: [
            { name: "Ricardo", role: "Veterinarian", workingHours: "35 hours/week" },
            { name: "Sara", role: "Janitor", workingHours: "30 hours/week" },
            { name: "Miguel", role: "Tour Guide", workingHours: "25 hours/week" }
        ]
    }
];


module.exports = {
    dataBase,
    list,
    fruits,
    zoos
};
