const Slot = require("./slot"), 
  Enums = require("../constant/enums");

class LSlot extends Slot {
  constructor(id) {
    super(id, Enums.SIZE.LARGE);
  }
}

module.exports = LSlot;