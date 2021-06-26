public class Search2DMatrix {

  public boolean searchMatrix(int[][] matrix, int target) {
    boolean isFound = false;

    //do binary search from l as 0 to r as n*m-1
    int n = matrix.length, m = matrix[0].length;
    int l = 0, r = n*m-1;

    while(l<=r) {
      int mid = Math.floorDiv(l+r, 2);
      int midValue = this.getValue(matrix, mid, n, m);

      if(midValue == target) {
        isFound = true;
        break;
      } else if (midValue > target) {
        r = mid-1;
      } else {
        l = mid+1;
      }
    }

    return isFound;
  }

  public int getValue(int[][] matrix, int pos, int n, int m) {
    int x = Math.floorDiv(pos, n);
    int y = pos%m;
    return matrix[x][y];
  }
}

// //0,0 0,1 0,2 0,3 0,4   
//    0   1   2   3   4
// //1,0 1,1 1,2 1,3 1,4
//    5   7   8   9   10
// //2,0 2,1 2,2 2,3 2,4

// n=3 m=5

// (15)/5 =

// x = index/m
// y = index%n
