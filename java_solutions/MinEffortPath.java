public class MinEffortPath {
    public int minimumEffortPath(int[][] heights) {
        //Initilize the variable required
        int result = Integer.MAX_VALUE;
        int[][] visited = new int[heights.length][heights[0].length];

        //DFS - depth first search
        visited[0][0] = 1;
        result = this.findMinimumPath(heights, 0, 0, visited, 0, Integer.MAX_VALUE);

        return result;
    }

    private boolean findMinimumPath(int[][] heights, int xx, int yy, int[][] visited, int current, int maxSoFar) {
      //is position already visited
      int[][] children = new int[][]{{0,-1}, {1,0}, {0,1}, {-1, 0}};
      boolean resultHere = false;
      //check children
      for(int[] child : children) {
        int x = xx + child[0];
        int y = yy + child[1];

        if(x>=0 && x<heights.length && y>=0 && y<heights[0].length && visited[x][y]==0) {
          int newValue = Math.max(current, Math.abs(heights[xx][yy]-heights[x][y]));
          if(newValue < maxSoFar) {
            visited[x][y] = 1;
            //if this is last position
            if(x==heights.length-1 && y==heights[0].length-1) {
              resultHere = true;
              break;
            } else {
              resultHere = findMinimumPath(heights, x, y, visited, newValue, maxSoFar);
            }
            // visited[x][y] = 0;
          }
        }
      }
      return resultHere;
    }

    public static void main(String[] args) {
      MinEffortPath obj = new MinEffortPath();

      int[][] heights = new int[][]{{1,2,1,1,1},{1,2,1,2,1},{1,2,1,2,1},{1,2,1,2,1},{1,1,1,2,1}};
      int result = obj.minimumEffortPath(heights);
      System.out.print("Result is "+result);
    }
}
