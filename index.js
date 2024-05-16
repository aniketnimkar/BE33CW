const express = require("express");
const app = express();

// This is middleware kind of thing which helps in reading request body as json data (we will learn how to write middleware later)
// middleware ---> It is a piece of code that will help you to achieve certain task
app.use(express.json());

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2021,
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2022,
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Corvette",
    year: 2023,
  },
  {
    id: 5,
    make: "Tesla",
    model: "Model 3",
    year: 2021,
  },
  {
    id: 6,
    make: "Nissan",
    model: "Altima",
    year: 2022,
  },
  {
    id: 7,
    make: "BMW",
    model: "X5",
    year: 2023,
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2021,
  },
  {
    id: 9,
    make: "Audi",
    model: "A4",
    year: 2022,
  },
  {
    id: 10,
    make: "Lexus",
    model: "RX",
    year: 2023,
  },
  {
    id: 11,
    make: "Hyundai",
    model: "Tucson",
    year: 2021,
  },
  {
    id: 12,
    make: "Kia",
    model: "Seltos",
    year: 2022,
  },
  {
    id: 13,
    make: "Mazda",
    model: "CX-5",
    year: 2023,
  },
  {
    id: 14,
    make: "Subaru",
    model: "Outback",
    year: 2021,
  },
  {
    id: 15,
    make: "Volkswagon",
    model: "Golf",
    year: 2022,
  },
];

app.get("/", (req, res) => {
  res.send("hello, Express");
});

app.post("/cars", (req, res) => {
  const newCar = req.body;

  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(400).json({ error: "Make, model and year are required." });
  } else {
    cars.push(newCar);
    res.status(201).json({ message: "Car added successfully", car: newCar });
  }
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.delete('/cars/:id', (req,res) => {
  const carId = req.params.id



  const index = cars.findIndex(car => car.id == carId)

  if(index === -1){
    res.status(404).json({error: "Car not found"})
  } else {
    cars.splice(index, 1)
    res.status(200).json({message: "Car deleted Successfully."})
  }

})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
