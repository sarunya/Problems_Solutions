/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  return _minStops(0, startFuel, target, stations, 0);
};

function _minStopsDP (target, startFuel, stations) {
  let dp = [];
  dp[0] = startFuel;

  for(let i=0; i<stations.length; i++) {
    for(let j=i+1; j>0 && dp[j-1]>=stations[i][0]; j--) {
      dp[j] = Math.max(dp[j], dp[j-1]+stations[i][1]);
    }
  }

  for(let i=0; i<=stations.length; i++) {
    if(dp[i] == target) {
      return i;
    }
  }

  return -1;
}


function _minStops(position, currentFuel, target, stations, index) {
  // console.log(position, currentFuel, target, stations, index)
  if(position>=target || position+currentFuel >= target) {
    return 0;
  }
  if(index >= stations.length) {
    return -1;
  }

  //Two possibilities here
  //1. stop and refuel at this position
  let distance = stations[index][0] - position;
  let possibility1 = -1, possibility2 = -1;
  if(currentFuel-distance>=0) {
    let newPosition = stations[index][0], newFuel = currentFuel-distance+stations[index][1];
    if(target-newPosition<=newFuel) {
      possibility1 = 0;
    } else {
      possibility1 = _minStops(newPosition, newFuel, target, stations, index+1);
    }
  }

  //2. possibility, if currentFuel is greater than 0, then we can still go further
  if(currentFuel-distance>0) {
    possibility2 = _minStops(position, currentFuel, target, stations, index+1);
  }

  possibility1 = possibility1>=0 ? 1+possibility1 : possibility1;

  // console.log(position, currentFuel, target, stations, index)
  if(possibility1==-1) {
    return possibility2;
  } else if(possibility2==-1) {
    return possibility1;
  } else {
    console.log(possibility1, possibility2);
    return Math.min(possibility1, possibility2);
  }
}

// let target = 171, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,41]]


// let result = minRefuelStops(target, startFuel, stations);

// console.log(result);