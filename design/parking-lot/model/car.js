const Vehicle = require("../vehicle"),
 Enums = require("../constant/enums");

class Car extends Vehicle {
  constructor(licenceNo) {
    super(licenceNo, Enums.SIZE.MEDIUM)
  }
}

module.exports = Car;