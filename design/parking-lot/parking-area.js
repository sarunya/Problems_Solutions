class ParkingArea {
  constructor(id, zipcode) {
    this.id = id;
    this.zipcode = zipcode;
    this.parkingLevels = [];
  }

  getId() {
    return this.id;
  }

  addParkingLevel(parkingLevel) {
    this.parkingLevels[parkingLevel.getLevel()] = parkingLevel;
  }

  parkInAvailableSlot(size) {
    for(let level of this.parkingLevels) {
      if(!level || !level.isActive()) {
        continue;
      }
      let slot = level.parkVehicle(size);
      if(slot){
        return slot;
      }
    }
    return null;
  }

  parkInAvailableBiggerSlot(size) {
    for(let level of this.parkingLevels) {
      if(!level || !level.isActive()) {
        continue;
      }
      let slot = level.parkVehicleInBiggerSize(size);
      if(slot){
        return slot;
      }
    }
    return null;
  }

  removeVehicleFromSlot(slot) {
    let levelId = slot.getParkingLevelId();
    return this.parkingLevels[levelId].removeVehicleFromSlot(slot);
  }

  displaySlotsInformation() {
    for(let level of this.parkingLevels) {
      if(level && level.isActive()) {
        level.displaySlotsInfo();
      }
    }
    return null;
  }

}

module.exports = ParkingArea;