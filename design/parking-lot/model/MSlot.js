const Slot = require("./slot"), 
  Enums = require("../constant/enums");

class MSlot extends Slot {
  constructor(id) {
    super(id, Enums.SIZE.MEDIUM);
  }
}

module.exports = MSlot;