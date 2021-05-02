class Slot {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.isOccupied = false;
    this.startTime = null;
    this.vehicleLicense = null;
    this.levelId = null;
    this.areaId = null;
    this.price = null;
  }

  getSize() {
    return this.size;
  }

  setParkingLevelId(levelId) {
    this.levelId = levelId;
  }

  setParkingAreaId(areaId) {
    this.areaId = areaId;
  }

  setPrice(price) {
    this.price = price;
  }

  getParkingLevelId() {
    return this.levelId;
  }

  getParkingAreaId() {
    return this.areaId;
  }

  getPrice() {
    return this.price;
  }

  parkCar(vehicleLicense) {
    this.isOccupied = true;
    this.vehicleLicense = vehicleLicense;
    this.startTime = new Date();
  }

  _getTimeInMinutes() {
    return (new Date() - this.startTime)/60000;
  }

  _getPriceByTime() {
    let minutes = this._getTimeInMinutes();
    let hours = Math.floor(minutes/60)+1;
    return this.price * hours;
  }

  removeCar() {
    let price = this._getPriceByTime();
    this.isOccupied = false;
    this.vehicleLicense = null;
    this.price = null;
    this.startTime = null;
    return price;
  }

  display() {
    console.log("------SLOT INFORMATION------");
    console.log("Parking area: ", this.areaId);
    console.log("Parking level: ", this.levelId);
    console.log("Parking slot: ", this.id);
    console.log("Parking Size: ", this.size);
    console.log("Parking Time: ", this.startTime.toString());
    console.log("Parking price per hour: ", this.price);
  }
}

module.exports = Slot;