import java.util.*;

public class SumSubarryMins {

  //TODO: optimise
  public int sumSubarrayMins(int[] arr) {
    int answer = 0, mod = (int) Math.pow(10, 9)+7;

    Deque<Integer> stack = new ArrayDeque<Integer>();

    for(int i=0; i<arr.length; i++) {
      stack.clear();
      for(int j=i; j<arr.length; j++) {
        if(stack.isEmpty() || stack.peek()>arr[j]) {
          stack.push(arr[j]);
        }
        answer = (answer + stack.peek()) % mod;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    SumSubarryMins obj = new SumSubarryMins();
    int[] nums = new int[]{11,81,94,43,3};
    int answer = obj.sumSubarrayMins(nums);
    System.out.println("Answer is "+answer);
  }
}
