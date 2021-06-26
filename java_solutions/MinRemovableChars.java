import java.util.*;

public class MinRemovableChars {

  public int maximumRemovals(String s, String p, int[] removable) {
    int high = removable.length-1, low = 0;

    while(low<high) {
      int mid = Math.floorDiv((low+high), 2);
      if(isSubsequence(s, p, mid, removable)) {
        low = mid+1;
      } else {
        high = mid;
      }

    }

    return low;
  }

  public boolean isSubsequence(String s, String p, int index, int[] removable) {
    Set<Integer> set = new HashSet<Integer>();

    for(int i=0; i<=index; i++) {
      set.add(removable[i]);
    }
    int j=0;
    for(int i=0; i<s.length() && j<p.length(); i++) {
      if(!set.contains(i) && s.charAt(i)==p.charAt(j)) {
        ++j;
      }
    }

    return j==p.length();
  }

  public static void main(String[] args) {

  }

}

// abcacb
//
