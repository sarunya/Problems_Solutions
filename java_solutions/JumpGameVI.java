import java.util.*;

public class JumpGameVI {

  public int maxResult(int[] nums, int k) {
    int n = nums.length;
    int max = nums[n - 1];

    PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> b[0]-a[0]);
    pq.add(new int[]{max, n-1});

    for (int i = n - 2; i >= 0; i--) {
        
      while (pq.size()>0 && pq.peek()[1] > i-k) {
        pq.poll();
      }
        
      max = nums[i] + pq.peek()[0];
      pq.add(new int[]{max, i});

    }


    return max;
  }
}
