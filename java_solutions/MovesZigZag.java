public class MovesZigZag {
  public int movesToMakeZigzag(int[] nums) {
    int even = 0, odd = 0;

    // even bigger or odd bigger
    for (int i = 0; i < nums.length; i++) {
      int left = (i == 0) ? Integer.MAX_VALUE : nums[i - 1];
      int right = (i == nums.length - 1) ? Integer.MAX_VALUE : nums[i + 1];

      int diff = Math.max(0, nums[i] - Math.min(left, right) + 1);
      diff = diff < 0 ? 0 : diff;

      if (i % 2 == 0) {
        even += diff;
      } else {
        odd += diff;
      }

    }
    return even <= odd ? even : odd;
  }

  public static void main(String[] args) {
    int[] nums = new int[] { 2, 7, 10, 9, 8, 9 };
    MovesZigZag sol = new MovesZigZag();
    int result = sol.movesToMakeZigzag(nums);
    System.out.println("Result is " + result);
  }
}

// 2,7,10,9,8,9

// 6, 2, 2 = 10

// 4, 2