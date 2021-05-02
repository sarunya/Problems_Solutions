const Vehicle = require("../vehicle"),
 Enums = require("../constant/enums");

class Bike extends Vehicle {
  constructor(licenceNo) {
    super(licenceNo, Enums.SIZE.SMALL)
  }
}

module.exports = Bike;