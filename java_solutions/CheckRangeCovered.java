import java.util.Arrays;

public class CheckRangeCovered {
  public boolean isCovered(int[][] ranges, int left, int right) {
    //sort ranges
    Arrays.sort(ranges, (a,b) -> a[0]-b[0]);
    int i=0;
    while(i<ranges.length && left<=right) {
      if(ranges[i][1]>=left && ranges[i][0] <= left) {
        left = ranges[i][1]+1;
      } 
      ++i;
    }

    return (left>right);
  }
}
