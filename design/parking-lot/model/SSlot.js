const Slot = require("./slot"), 
  Enums = require("../constant/enums");

class SSlot extends Slot {
  constructor(id) {
    super(id, Enums.SIZE.SMALL);
  }
}

module.exports = SSlot;