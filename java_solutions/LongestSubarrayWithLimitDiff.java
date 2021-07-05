import java.util.PriorityQueue;

class LongestSubarrayWithLimitDiff {
  public int longestSubarray(int[] nums, int limit) {
      int result = 0;

      PriorityQueue<Integer> minqueue = new PriorityQueue<Integer>();
      PriorityQueue<Integer> maxqueue = new PriorityQueue<Integer>((a,b)->b-a);

      int i=0;

      for(int j=0; j<nums.length; j++) {
        int val = nums[j];
        minqueue.add(val);
        maxqueue.add(val);

        while((maxqueue.peek()-minqueue.peek()) > limit) {
          //then remove value of i from queue
          maxqueue.remove(nums[i]);
          minqueue.remove(nums[i]);
          ++i;
        }

        result = Math.max(result, j-i+1);
      }


      return result;
  }

  public static void main(String[] args) {
    int[] arr = new int[]{4,2,2,2,4,4,2,2};

    LongestSubarrayWithLimitDiff obj = new LongestSubarrayWithLimitDiff();
    int result = obj.longestSubarray(arr, 0);
    System.out.println("Result is "+result);
  }
}