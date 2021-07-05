public class SingleNumberII {

  //TODO:
  public int singleNumber(int[] nums) {
    int ones = 0, twos = 0, threes = 0;

    for(int val : nums) {
      //for each val, calculate number of times 1s came
      twos |= ones & val;


      ones = ones ^ val;

      threes = twos & val;

      ones = ones & (~threes);

    }

    return ones;
  }

  public static void main(String[] args) {
    SingleNumberII obj = new SingleNumberII();
    int[] nums = new int[] {2,2,3,2};
    int result = obj.singleNumber(nums);
    System.out.println("Result is "+result);
  }
}

//  10
//  10
//  10
//  11
// 100
