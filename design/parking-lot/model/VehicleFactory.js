const Bike = require("./bike"),
  Car = require("./car"),
  Bus = require("./bus"),
  Truck = require("./truck"),
  Enums = require("../constant/enums");

class VehicleFactory {
  constructor(){}
  getVehicle(id, size) {
    switch(size) {
      case Enums.SIZE.SMALL:
        return new Bike(id);
      case Enums.SIZE.MEDIUM:
        return new Car(id);
      case Enums.SIZE.LARGE:
        return new Bus(id);
      case Enums.SIZE.EXTRALARGE:
        return new Truck(id);
    }
  }
}

module.exports = VehicleFactory;