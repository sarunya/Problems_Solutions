const Vehicle = require("../vehicle"),
 Enums = require("../constant/enums");

class Truck extends Vehicle {
  constructor(licenceNo) {
    super(licenceNo, Enums.SIZE.EXTRALARGE)
  }
}

module.exports = Truck;