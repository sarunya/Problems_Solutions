/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
 var largestPathValue = function (colors, edges) {

  let n = colors.length;
  let graph = new Map(), stack = [];
  let posMap = new Map();
  let dp = [], answer = 0;

  //create graph
  for (let edge of edges) {
    if (!graph.has(edge[0])) {
      graph.set(edge[0], []);
    }
    let val = graph.get(edge[0]);
    val.push(edge[1]);
  }

  //dfs for all numbers
  for (let v = 0; v < n; v++) {
    //do dfs for v
    if (!dp[v])
      getPath(v);
  }

  if (isCycleExists()) {
    return -1;
  }

  function isCycleExists() {
    let pos = 0;
    // console.log(stack);
    while (stack.length > 0) {
      let val = stack.pop();
      posMap.set(val, pos++);
    }
    // console.log(posMap);
    //check for each vertex
    for (let v = 0; v < n; v++) {
      if (graph.has(v)) {
        for (let ch of graph.get(v)) {
          if(posMap.get(v) >= posMap.get(ch)) {
            // console.log(ch, v);
            return true;
          }
        }
      }
    }
    return false;
  }

  function getPath(v) {
    if (dp[v]) {
      return;
    }
    if (graph.has(v)) {
      dp[v] = {};
      for (let ch of graph.get(v)) {
        //if ch is not already visited
        if (!dp[ch]) {
          getPath(ch);
        }
        //for all colors in dp[c] update dp[v]
        for (let co in dp[ch]) {
          let existing = dp[v][co] || 0;
          dp[v][co] = Math.max(existing, dp[ch][co]);
          answer = Math.max(answer, dp[v][co]);
        }
      }
    }
    //no further outgoing nodes
    dp[v] = dp[v] || {};
    dp[v][colors[v]] = (!dp[v][colors[v]]) ? 1 : dp[v][colors[v]] + 1;
    answer = Math.max(answer, dp[v][colors[v]]);

    stack.push(v);
  }

  // console.log(stack);
  return answer;
};

let colors = "a", edges = [[0, 0]];
let answer = largestPathValue(colors, edges);
console.log(answer);