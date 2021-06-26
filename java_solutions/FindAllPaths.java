import java.util.*;

public class FindAllPaths {

    public void dfs(int[][] graph, int node, int target, Set<Integer> visited, List<Integer> currentResult, List<List<Integer>> result) {
        if(node==target) {
            result.add(new ArrayList<>(currentResult));
        }

        for(int i=0; i<graph[node].length; i++) {
            Integer currentNode = graph[node][i];
            if(!visited.contains(currentNode)) {
                visited.add(currentNode);
                currentResult.add(currentNode);
                this.dfs(graph, currentNode, target, visited, currentResult, result);
                visited.remove(currentNode);
                currentResult.remove(currentNode);
            }
        }
    }
  
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> currentResult = new ArrayList<Integer>();
        Set<Integer> visited = new HashSet<Integer>();
        visited.add(0);
        currentResult.add(0);
        this.dfs(graph, 0, graph.length-1, visited, currentResult, result);
        return result;
    }


}
