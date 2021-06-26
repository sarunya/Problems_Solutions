import java.util.*;


public class Bfs {

  private static class Node {
    int val;
    List<Node> adjacents = new ArrayList<Node>();
    public Node(int val) {
      this.val = val;
    }

    public void addNode(Node child) {
      this.adjacents.add(child);
    }
  }

  public static int getNumberOfNodes(Node[] nodes, int level) {
    Set<Integer> queue = new LinkedHashSet<Integer>();
    queue.add(1);
    int currentLevel = 1;
    int[] visited = new int[nodes.length];
    visited[1] = 1;

    while(!queue.isEmpty() && currentLevel < level) {
      Set<Integer> temp = new LinkedHashSet<Integer>();
      temp.addAll(queue);
      queue.clear();
      for(int u : temp) {
        Node node = nodes[u];
        for(Node child : node.adjacents) {
            if(visited[child.val]==0) {
                queue.add(child.val);
                visited[child.val] = 1;
            }
        }
      }
    //   System.out.println("IN QUEUE FOR LEVEL "+currentLevel);
    //   for(int q : queue) {
    //     System.out.println("Qeueue is "+q);
    //   }
      ++currentLevel;
    }

    // for(int q : queue) {
    //     System.out.println("Qeueue is "+q);
    // }
    return queue.size();
  }
  public static void main(String[] args) {

    //get input from console
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    Node[] nodes = new Node[n+1];

    //form graph
    for(int i=1; i<n; i++) {
      int u = s.nextInt();
      int v = s.nextInt();
      if(nodes[u]==null) {
        nodes[u] = new Node(u);
      }
      if(nodes[v]==null) {
        nodes[v] = new Node(v);
      }

      nodes[u].addNode(nodes[v]);
      nodes[v].addNode(nodes[u]);

    }


    int level = s.nextInt();
    int answer = getNumberOfNodes(nodes, level);

    System.out.println(answer);
  }

}
