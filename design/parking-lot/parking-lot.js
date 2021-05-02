class ParkingLot {
  constructor() {
    this.parkingArea = {};
    this.vehicleSlotMap = {};
  }

  addParkingArea(parkingArea) {
    this.parkingArea[parkingArea.getId()] = parkingArea;
  }

  removeParkingArea(parkingArea) {
    delete this.parkingArea[parkingArea.getId()];
  }

  parkVehicleInSize(parkingAreaId, vehicle) {
    let slot = this.parkingArea[parkingAreaId].parkInAvailableSlot(vehicle);
    if(!slot) {
      return  null;
    }
    this.vehicleSlotMap[vehicle.getLicenseNo()] = slot;
    return slot;
  }

  parkVehicleInBiggerSize(parkingAreaId,vehicle) {
    let slot = this.parkingArea[parkingAreaId].parkInAvailableBiggerSlot(vehicle);
    if(!slot) {
      return  null;
    }
    this.vehicleSlotMap[vehicle.getLicenseNo()] = slot;
    return slot;
  }

  removeVehicle(licenceNo) {
    if(!this.vehicleSlotMap[licenceNo]) {
      console.log("Vehicle not parked");
      return;
    }
    let slot = this.vehicleSlotMap[licenceNo];
    let parkingArea = this.parkingArea[slot.getParkingAreaId()];
    slot.display();
    return parkingArea.removeVehicleFromSlot(slot);
  }

  displaySlotsInformation(parkingAreaId) {;
    let parkingArea = this.parkingArea[parkingAreaId];
    parkingArea.displaySlotsInformation();
  }
}

module.exports = ParkingLot;