/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function (numCourses, prerequisites) {
  let visited = [];
  let graph = new Map();
  let currentSet = new Set();

  for (let [u, v] of prerequisites) {
    // console.log(u, v)
    if (graph.has(u)) {
      graph.get(u).add(v);
    } else {
      let adj = new Set();
      adj.add(v);
      graph.set(u, adj);
    }
  }

  //print the graph
  // for(let [node, adj] of graph.entries()) {
  //   console.log(node, adj);
  // }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (dfs(graph, i, visited, currentSet)) {
        return false;
      }
    }
  }

  return true;
};


function dfs(graph, node, visited, currentSet) {
  if (!visited[node] && !currentSet.has(node)) {
    visited[node] = true;
    currentSet.add(node);

    //visit the adjacents
    if (graph.has(node)) {
      for (let child of graph.get(node)) {
        if (dfs(graph, child, visited, currentSet)) {
          return true;
        }
      }
    }

    //remove node from currentSet
    currentSet.delete(node);
  } else if (currentSet.has(node)) {
    return true;
  }
  return false;
}


// canFinish(2, [[1, 0], [0, 1]]);