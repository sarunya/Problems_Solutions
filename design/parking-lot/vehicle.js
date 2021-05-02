class Vehicle {
  constructor(licenseNo, size) {
    this.licenseNo = licenseNo;
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  getLicenseNo() {
    return this.licenseNo;
  }
}

module.exports = Vehicle