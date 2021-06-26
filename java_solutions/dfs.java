import java.util.*;


public class Dfs {

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

  public static int getNumberOfNodes(Node[] nodes, int n, int head) {
    Queue<Integer> queue = new LinkedList<Integer>();
    int[] visited = new int[n];
    queue.add(head);

    while(!queue.isEmpty()) {
      int vertex = queue.poll();
      visited[vertex-1] = 1;
      for(Node child : nodes[vertex].adjacents) {
        if(visited[child.val-1]==0) {
          queue.add(child.val);
          visited[child.val-1] = 1;
        }
      }
    }
    int ans = 0;

    for(int vbool: visited) {
      if(vbool==0)
        ++ans;
    }

    return ans;
  }

  public static void main(String[] args) {

    //get input from console
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    int m = s.nextInt();
    Node[] nodes = new Node[n+1];

    //form graph
    for(int i=0; i<m; i++) {
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


    int head = s.nextInt();
    int answer = getNumberOfNodes(nodes, n, head);

    System.out.println(answer);
  }

}
