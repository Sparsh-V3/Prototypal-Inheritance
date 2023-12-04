function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function(){
    this.speed += 10;
}

Vehicle.prototype.brake = function(){
    this.speed -= 5;
}

Vehicle.prototype.refuel = function(){
    console.log("The vehicle is being refueled");
}

function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype.honk = function(){
    console.log("BEEP");
}

function AirPlane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

AirPlane.prototype.takeOff = function(){
    console.log("The AirPlane is Taking-Off");
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Object.setPrototypeOf(AirPlane.prototype, Vehicle.prototype)

let car_1 = new Car("Buggatti Chiron", 10789, 0, "Petrol", 4);

let airplane_1 = new AirPlane("Indigo", 2024, 0, "Diesel", 2, false);

console.log(car_1);

console.log(airplane_1);