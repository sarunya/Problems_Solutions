const Vehicle = require("../vehicle"),
 Enums = require("../constant/enums");

class Bus extends Vehicle {
  constructor(licenceNo) {
    super(licenceNo, Enums.SIZE.LARGE)
  }
}

module.exports = Bus;