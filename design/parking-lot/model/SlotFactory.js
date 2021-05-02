const SSlot = require("./SSlot"),
  MSlot = require("./MSlot"),
  LSlot = require("./LSlot"),
  XLSlot = require("./XLSlot"),
  Enums = require("../constant/enums");

class SlotFactory {
  constructor(){}
  getSlot(id, size) {
    switch(size) {
      case Enums.SIZE.SMALL:
        return new SSlot(id);
      case Enums.SIZE.MEDIUM:
        return new MSlot(id);
      case Enums.SIZE.LARGE:
        return new LSlot(id);
      case Enums.SIZE.EXTRALARGE:
        return new XLSlot(id);
    }
  }
}

module.exports = SlotFactory;