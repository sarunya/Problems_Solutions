
var UndergroundSystem = function() {
    this.userDetails = {};
    this.average = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.userDetails[id] = {
    start: stationName,
    time: t
  }
};

/** 
 * @param {number} id 
 * @param {string} end 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, end, t) {
  let userDetail = this.userDetails[id];
  let {start, time} = userDetail;

  if(!this.average[start]) {
    this.average[start] = {}
  }

  if(!this.average[start][end]) {
    this.average[start][end] = [0, 0];
  }
  //0 sum 1 frequency
  this.average[start][end][0] += (t-time)
  this.average[start][end][1] += 1
  delete this.userDetails[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let value = this.average[startStation][endStation][0]/this.average[startStation][endStation][1];
  return value.toFixed(5);
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */