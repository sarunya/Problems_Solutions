/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  let n = isWater.length, m=isWater[0].length;
  const heights = new Array(n).fill(null).map(()=>new Array(m).fill(null));

  let bfs = [];
  //get water spots
  for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
      if(isWater[i][j]==1) {
        bfs.push([i,j]);
        heights[i][j] = 0;
      }
    }
  }

  let neighbors = [[0,-1], [1,0], [0,1], [-1,0]];
  while(bfs.length>0) {
    let tempBfs = [];

    for(let point of bfs) {
      let curHeight = heights[point[0]][point[1]];

      for(let neighbor of neighbors) {
        let x = point[0]+neighbor[0], y=point[1]+neighbor[1];
        if(x>=0 && x<n && y>=0 && y<m && heights[x][y]==null) {
          heights[x][y] = curHeight+1;
          tempBfs.push([x,y]);
        }
      }

    }
    bfs = tempBfs;
  }
  return heights;
}


// let isWater = [[0,0,1],[1,0,0],[0,0,0]];
// console.log(highestPeak(isWater));