/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */

function getInitialGrid(n) {
    let grid = [];
    for(let i=0; i<n; i++) {
        grid[i] = [];
        for(let j=0; j<n ;j++) {
            grid[i][j] = 0;
        }
    }
    return grid;
}

function illuminateRCD(grid, visited, lamp, n, mark=1) {
    

    if(visited[lamp[0]][lamp[1]]==1 && mark==1) {
        return;
    } else if(mark==1) {
      visited[lamp[0]][lamp[1]] = 1;
    } else if(visited[lamp[0]][lamp[1]] != 1) {
      grid[lamp[0]][lamp[1]] -= 1;
    }
    
    //mark row to true
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(i==lamp[0] || j==lamp[1]) {
                grid[i][j] += mark
            } else if(Math.abs(i-lamp[0]) == Math.abs(j-lamp[1])) {
                grid[i][j] += mark
            }
            
            if(grid[i][j]<0) {
                grid[i][j] = 0;
            }
        }
    }
    
}

function turnOffAdjacents(grid, visited, ii, jj, n) {
    let adjacents = [[-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1]]
    for(let adj of adjacents) {
        let i = ii+adj[0], j=jj+adj[1];
        if(i>=0 && i<n && j>=0 && j<n) {
            illuminateRCD(grid, visited, [i, j], n, -1);
        }
    }
}

var gridIllumination = function(n, lamps, queries) {
    let grid = getInitialGrid(n);
    let visited = getInitialGrid(n);
    
    //make each lamp and its row, column and diagonal
    for(let i=0; i<lamps.length; i++) {
        let lamp = lamps[i];
        //mark rcd (row column diagonal) to true
        illuminateRCD(grid, visited, lamp, n);
    }
    
    //solve queries
    let result = []
    for(let i=0; i<queries.length; i++) {
        let query = queries[i];
        console.log(grid, query)
        if(grid[query[0]][query[1]]) {
            result.push(1);
        } else {
            result.push(0);
        }
        
        if(i<queries.length-1) {
            //turn off adjacents 
            turnOffAdjacents(grid, visited, query[0], query[1], n);
        }
    }
    
    return result;
};