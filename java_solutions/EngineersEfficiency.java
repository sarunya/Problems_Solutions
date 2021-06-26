import java.util.Arrays;
import java.util.PriorityQueue;

public class EngineersEfficiency {
  public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
    int arr[][] = new int[n][2];
    for(int i=0; i<n; i++) {
      arr[i] = new int[]{efficiency[i], speed[i]};
    }
    Arrays.sort(arr, (a,b)->b[0]-a[0]);

    PriorityQueue<Integer> pq = new PriorityQueue<>();
    long result = 0, currentSum = 0;
    int mod=(int)1e9+7;

    for(int[] cur: arr) {
      pq.add(cur[1]);
      currentSum += cur[1];

      if(pq.size()>k) {
        currentSum -= pq.remove();
      }
      result = Math.max(result, currentSum*cur[0]);
    }


    return (int)(result%mod);
  }
}
