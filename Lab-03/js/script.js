// Object constructor for the Toy Car
function ToyCar(model, color, speed, price, year, material) {
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.price = price;
    this.year = year;
    this.material = material;
}

// Creating a toy car instance
let redSportsCar = new ToyCar("Red Racer", "Bright Red", "120 mph", "$50.00", "2024", "Durable Plastic");

// Function to update the speed of the car dynamically
function updateSpeed() {
    const newSpeed = document.getElementById('newSpeed').value;
    if (newSpeed) {
        redSportsCar.speed = newSpeed + " mph";
        document.getElementById('carSpeed').textContent = redSportsCar.speed;
    }
}

// Populate the car details on page load
document.getElementById('carModel').textContent = redSportsCar.model;
document.getElementById('carColor').textContent = redSportsCar.color;
document.getElementById('carSpeed').textContent = redSportsCar.speed;
document.getElementById('carPrice').textContent = redSportsCar.price;
document.getElementById('carYear').textContent = redSportsCar.year;
document.getElementById('carMaterial').textContent = redSportsCar.material;
