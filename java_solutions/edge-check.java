/* IMPORTANT: Multiple classes and nested static classes are supported */

/*
 * uncomment this if you want to read input.
//imports for BufferedReader
import java.io.BufferedReader;
import java.io.InputStreamReader;*/

//import for Scanner and other utility classes
import java.io.PrintStream;
import java.util.*;


// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

class TestClass {

    public static boolean isEdgeAvailable(HashMap<Integer, List<Integer>> graph, int u, int v) {
      if(graph.containsKey(u)) {
        return graph.get(u).contains(v);
      }
      return false; 
    }
    public static void main(String args[] ) throws Exception {
        //Scanner
        Scanner s = new Scanner(System.in);
        PrintStream p = new PrintStream(System.out);
        s.nextInt();       
        int m = s.nextInt();  

        HashMap<Integer, List<Integer>> graph = new HashMap<Integer, List<Integer>>();

        for(int i=0; i<m ;i++) {
            int u = s.nextInt();
            int v = s.nextInt();

            List<Integer> uList = null, vList = null;
            if(!graph.containsKey(u)) {
              uList = new ArrayList<Integer>();
            } else {
              uList = graph.get(u);
            }

            if(!graph.containsKey(v)) {
              vList = new ArrayList<Integer>();
            } else {
              vList = graph.get(v);
            }

            uList.add(v);
            graph.put(u, uList);
            vList.add(u);
            graph.put(v, vList);
        }                      

        // Write your code here
        int Q = s.nextInt();

        for(int i=0; i<Q ;i++) {
          int u = s.nextInt();
          int v = s.nextInt();

          if(isEdgeAvailable(graph, u, v) || isEdgeAvailable(graph, v, u)) {
            p.println("YES");
          } else {
            p.println("NO");
          }
        }
    }
}
