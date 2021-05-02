const Slot = require("./slot"), 
  Enums = require("../constant/enums");

class XLSlot extends Slot {
  constructor(id) {
    super(id, Enums.SIZE.EXTRALARGE);
  }
}

module.exports = XLSlot;