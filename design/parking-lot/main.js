const ParkingLot = require("./parking-lot");
const ParkingArea = require("./parking-area");
const ParkingLevel = require("./parking-level");
const SlotFactory = require("./model/SlotFactory");
const VehicleFactory = require("./model/VehicleFactory");
const Enums = require("./constant/enums");
const prompt = require("prompt-sync")({ sigint: true });

class Main {

  constructor() {
    this.slotFactory = new SlotFactory();
    this.vehicleFactory = new VehicleFactory();
    this.parkingLot = new ParkingLot();
  }

  addLevelSlots(parkingLevel, s = 2, m = 1, l = 1, xl = 0) {
    let total = s + m + l + xl, id = 1;
    while (id <= total) {
      let slot = null;
      if (s > 0) {
        slot = this.slotFactory.getSlot(id, Enums.SIZE.SMALL);
        --s;
      } else if (m > 0) {
        slot = this.slotFactory.getSlot(id, Enums.SIZE.MEDIUM);
        --m;
      } else if (l > 0) {
        slot = this.slotFactory.getSlot(id, Enums.SIZE.LARGE);
        --l;
      } else {
        slot = this.slotFactory.getSlot(id, Enums.SIZE.EXTRALARGE);
        --xl;
      }
      parkingLevel.addSlot(slot);
      ++id;
    }
  }

  buildParkingArea() {
    console.log("------BUILD PARKING AREA------");
    //create two parking levels with slots
    let parkingLevel1 = new ParkingLevel(1, 1, 1);
    this.addLevelSlots(parkingLevel1);
    let parkingLevel2 = new ParkingLevel(2, 1, 2);
    this.addLevelSlots(parkingLevel2, 0, 0, 0, 2);

    //add parking levels to area
    let parkingArea = new ParkingArea(1, 600053);
    parkingArea.addParkingLevel(parkingLevel1);
    parkingArea.addParkingLevel(parkingLevel2);

    //add parking area to lot
    this.parkingLot.addParkingArea(parkingArea);
  }

  _displayHomeMenu() {
    console.log("------Hi! Welcome!------");
    this.parkingLot.displaySlotsInformation(1);
    console.log("------Menu------");
    console.log("Press 1 : To Park your vehicle ");
    console.log("Press 2 : Remove your vehicle ");
    console.log("Press 3 : Quit");
  }

  _getInput() {
    return prompt("Press a number to continue: ");
  }

  _getLicenceNo() {
    console.log("------Enter Vehicle Information------");
    let licenceNo = prompt("Enter licence number ");
    return licenceNo;
  }

  _getVehicleInfoFromUser() {
    let licenceNo = this._getLicenceNo();
    let carType = prompt("Enter vehicle size (S,M,L,XL) ");
    return this.vehicleFactory.getVehicle(licenceNo, carType);
  }


  handleParkVehicle() {
    let vehicle = this._getVehicleInfoFromUser();
    let slot = this.parkingLot.parkVehicleInSize(1, vehicle);
    if (slot) {
      slot.display();
      return;
    }
    console.log("------Slot not available------")
    console.log("Press 1 : To Park your vehicle in bigger slot");
    console.log("Press any other : To quit");
    let input = this._getInput();
    if (input == "1") {
      let slot = this.parkingLot.parkVehicleInBiggerSize(1, vehicle);
      if (slot) {
        slot.display();
        return;
      }
    }
    console.log("Sorry for incovenience No slot is available\n\n");
  }

  handleRemoveVehicle() {
    let licenceNo = this._getLicenceNo();
    let price = this.parkingLot.removeVehicle(licenceNo);
    console.log("-----Amount : ", price);
  }


  main() {
    while (true) {
      let input, retry = 3;
      do {
        this._displayHomeMenu();
        input = this._getInput();
        input = parseInt(input);
        --retry;
      } while (input > 3 && retry > 0)

      if (input == 1) {
        this.handleParkVehicle();
      } else if (input == 2) {
        this.handleRemoveVehicle();
      } else {
        break;
      }
    }
  }

}

console.log("------MAIN OBJECT------");
let mainObj = new Main();
mainObj.buildParkingArea();
mainObj.main();