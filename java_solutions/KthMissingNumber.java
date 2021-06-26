class KthMissingNumber {
  public int findKthPositive(int[] arr, int k) {
      int answer = 1, i=0;
      while(k>0) {
        if(arr[i]==answer) {
          ++i;
        } else {
          --k;
        }
        ++answer;
      }
      return answer;
  }
}