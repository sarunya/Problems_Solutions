import java.util.*;

public class RottenOranges {
  public int orangesRotting(int[][] grid) {
      int result = 0, fresh = 0, n = grid.length, m = grid[0].length;

      Queue<int[]>  queue = new LinkedList<int[]>();

      for(int i=0; i<n; i++) {
        for(int j=0; j<m; j++) {
          if(grid[i][j] == 2) {
            //rotten orange
            queue.add(new int[]{i, j});
          } else if(grid[i][j] == 1) {
            //fresh orange
            ++fresh;
          }
        }
      }

      if(fresh==0) {
        return 0;
      }

      while(!queue.isEmpty()) {
        Queue<int[]> tempQueue = new LinkedList<int[]>();
        tempQueue.addAll(queue);
        queue.clear();
        result += 1;
        //traverse one level
        while(!tempQueue.isEmpty()) {
          int[] pos = tempQueue.poll();

          int[][] children = new int[][] {{0,-1}, {1, 0}, {0, 1}, {-1, 0}};

          //mark neighbors rotten
          for(int[] child: children) {
            int x = pos[0]+child[0], y = pos[1]+child[1];
            if(x>=0 && y>=0 && x<n && y<m && grid[x][y] == 1) {
              grid[x][y] = 2;
              --fresh;
              queue.add(new int[]{x, y});
            } 
          }
          //end of neighbors
        }
        //end of level
      }

      return (fresh>0)?-1:result;
  }
}