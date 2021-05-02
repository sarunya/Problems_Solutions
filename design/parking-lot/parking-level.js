const Enums = require("./constant/enums");

class ParkingLevel {

  constructor(id, areaId, level, status = Enums.PARKING_LEVEL_STATUS.ACTIVE) {
    this.id = id;
    this.level = level;
    this.areaId = areaId;
    this.slots = [];
    this.status = status;
    this.freeSlotsBySize = {};
    this.occupiedSlots = 0;
  }

  getOccupiableSizeOrder() {
    let SIZE = Enums.SIZE;
    return [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE, SIZE.EXTRALARGE];
  }

  setStatus(status) {
    this.status = status;
  }

  getLevel() {
    return this.level;
  }

  isActive() {
    return this.status == Enums.PARKING_LEVEL_STATUS.ACTIVE;
  }

  addSlot(slot) {
    slot.setParkingLevelId(this.id);
    slot.setParkingAreaId(this.areaId);
    this.slots.push(slot);
    //add to free slots stack
    this._addToFreeSlotsBySize(slot);
  }

  _addToFreeSlotsBySize(slot) {
    let size = slot.getSize();
    if(!this.freeSlotsBySize[size]) {
      this.freeSlotsBySize[size] = [];
    }
    this.freeSlotsBySize[size].push(slot);
  }

  _getFreeSlotBySize(size) {
    if(!this.freeSlotsBySize[size]) {
      this.freeSlotsBySize[size] = [];
    }
    return this.freeSlotsBySize[size].pop();
  }

  _getFreeSlotByBiggerSize(size) {
    let occupiableSize = this.getOccupiableSizeOrder();
    let index = occupiableSize.indexOf(size);
    for(let i=index+1; i<occupiableSize.length; i++) {
      let sizeOrder = occupiableSize[i];
      let freeSlot = this._getFreeSlotBySize(sizeOrder);
      if(freeSlot) {
        return freeSlot
      }
    }
    return null;
  }

  _partInSlot(slot, vehicle) {
    ++this.occupiedSlots
    slot.setPrice(Enums.PRICEBYSIZE[slot.getSize()])
    slot.parkCar(vehicle.getLicenseNo());
  }

  parkVehicle(vehicle) {
    let slot = this._getFreeSlotBySize(vehicle.getSize());
    if(slot) {
      this._partInSlot(slot, vehicle);
      return slot;
    }
    return null;
  }

  _getNoOfFreeSlots(size) {
    if(!this.freeSlotsBySize[size]) {
      this.freeSlotsBySize[size] = [];
    }
    return this.freeSlotsBySize[size].length;
  }

  parkVehicleInBiggerSize(vehicle) {
    let slot = this._getFreeSlotByBiggerSize(vehicle.getSize());
    if(slot) {
      this._partInSlot(slot, vehicle);
      return slot;
    }
    return null;
  }

  removeVehicleFromSlot(slot) {
    let price = slot.removeCar();
    --this.occupiedSlots
    this._addToFreeSlotsBySize(slot);
    return price;
  }
  
  displaySlotsInfo() {
    console.log(`------SLOT INFORMATION FOR PARKING LEVEL ${this.level}------`);
    console.log(`Occupied slots: ${this.occupiedSlots}`)
    console.log(`Available S slots: ${this._getNoOfFreeSlots(Enums.SIZE.SMALL)}`)
    console.log(`Available M slots: ${this._getNoOfFreeSlots(Enums.SIZE.MEDIUM)}`)
    console.log(`Available L slots: ${this._getNoOfFreeSlots(Enums.SIZE.LARGE)}`)
    console.log(`Available XL slots: ${this._getNoOfFreeSlots(Enums.SIZE.EXTRALARGE)}`)
  }
}

module.exports = ParkingLevel;