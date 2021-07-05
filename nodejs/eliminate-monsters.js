/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let minDistance = 100000000, minI = -1, eliminated = new Set();

  while (true) {
    for (let i = 0; i < speed.length; i++) {
      dist[i] = dist[i] / speed[i];
      if(eliminated.has(i)) {
        continue;
      }
      if (minDistance == 0 && dist[i] == 0) {
        break;
      }
      if (minDistance > dist[i]) {
        minDistance = dist[i];
        minI = i;
      }
    }
    //eliminate minI
    if (minI != -1) {
      eliminated.add(minI);
    } else {
      break;
    }
    if(eliminated.size==dist.length) {
      break;
    }
  }

  return eliminated.size;

};