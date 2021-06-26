class Solution {
  public boolean checkInclusion(String s1, String s2) {
      int[] arr1 = new int[26], arr2 = new int[26];
      
      for(int i=0; i<s1.length(); i++) {
          arr1[s1.charAt(i)-'a']++;
          arr2[s2.charAt(i)-'a']++;
      }

      //sliding window
      for(int i=0; i<s2.length()-s1.length()+1; i++) {
        if(isMatch(arr1, arr2)) {
          return true;
        }
        arr2[s2.charAt(i)-'a']--;
        arr2[s2.charAt(i+s1.length())-'a']++;
      }

      return false;
  }

  public boolean isMatch(int[] arr1, int[] arr2) {
    for(int i=0; i<arr1.length; i++) {
      if(arr1[i]!=arr2[i]) {
        return false;
      }
    }
    return true;
  }
}