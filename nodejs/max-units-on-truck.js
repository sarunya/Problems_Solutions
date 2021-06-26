/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {  

  //sort boxTypes by capacity in ascending order
  boxTypes.sort((a,b) => a[1]-b[1])

  let result = 0, n = boxTypes.length-1;

  while(n>=0 && truckSize > 0) {
    result += boxTypes[n][1];
    truckSize -= 1;
    --boxTypes[n][0];
    if(boxTypes[n][0]==0) {
      --n;
    }
  }

  return result;
};

let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
let result = maximumUnits(boxTypes, truckSize);
console.log(result);