// Toy Car Constructor
function ToyCar(model, color, speed, price, year, material) {
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.price = price;
    this.year = year;
    this.material = material;
}

// Create an instance of the Red Sports Car
const redSportsCar = new ToyCar("Red Sports Car", "Red", "120 mph", "$29.99", "2024", "Plastic");

// Display the initial car details
function displayCarInfo() {
    document.getElementById("carModel").innerText = redSportsCar.model;
    document.getElementById("carColor").innerText = redSportsCar.color;
    document.getElementById("carSpeed").innerText = redSportsCar.speed;
    document.getElementById("carPrice").innerText = redSportsCar.price;
    document.getElementById("carYear").innerText = redSportsCar.year;
    document.getElementById("carMaterial").innerText = redSportsCar.material;
}

// Update car speed when the button is clicked
function updateSpeed() {
    const newSpeed = document.getElementById("newSpeed").value;
    if (newSpeed) {
        redSportsCar.speed = newSpeed + " mph";
        displayCarInfo();
    }
}

// Initialize the car information on page load
displayCarInfo();
