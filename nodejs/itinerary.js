
function constructGraph(tickets) {
    let graph = {};
    for(let ticket of tickets) {
        let start = ticket[0], end = ticket[1];
        if(!graph[start]) {
            graph[start] = [];
        }
        
        graph[start].push(end)
    }
    return graph;
}

function sortGraphValues(graph) {
    for(let key in graph) {
        graph[key].sort().reverse();
    }
    return graph;
}

function dfsSearch(graph, place, dfsResult) {
    // console.log(place);
    dfsResult.push(place);
    if(!graph[place]) {
        return;
    }
    while(graph[place].length>0) {
        let nplace = graph[place].pop();
        dfsSearch(graph, nplace, dfsResult);
    }
}

var findItinerary = function(tickets) {
    let graph = constructGraph(tickets);
    graph = sortGraphValues(graph);
    
    let dfsResult = [];
    // console.log(graph);
    dfsSearch(graph, "JFK", dfsResult);
    return dfsResult;
};


let tickets = [["JFK","MUC"],["JFK","SJC"],["SJC","MUC"]];
let result = findItinerary(tickets);
console.log(result);