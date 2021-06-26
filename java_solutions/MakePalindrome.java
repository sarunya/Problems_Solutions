import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MakePalindrome {

  public List<Map<Integer, Integer>> preProcess(String s) {
    Map<Integer, Integer> frequency = new HashMap<Integer, Integer>();
    List<Map<Integer, Integer>> preprocessedList = new ArrayList<Map<Integer, Integer>>();

    // process each index of string and calculate the frequency
    for (int i = 0; i < s.length(); i++) {
      int key = s.charAt(i);
      int freq = frequency.getOrDefault(key, 0);
      frequency.put(key, freq + 1);
      // each index make a copy of hash map and push it
      preprocessedList.add(new HashMap<Integer,Integer>(frequency));
    }

    return preprocessedList;
  }

  public List<Boolean> canMakePaliQueries(String s, int[][] queries) {
    List<Map<Integer, Integer>> preprocess = preProcess(s);

    List<Boolean> result = new ArrayList<Boolean>();

    for(int[] query : queries) {
      int left = query[0], right = query[1], k = query[2];

      //find frequency now
      Map<Integer, Integer> frequency = new HashMap<Integer,Integer>(preprocess.get(right));

      //if starting index is greater than 0
      if(left>0) {
        //get left frequency and remove from right
        Map<Integer, Integer> leftFreq = preprocess.get(left-1);

        for (Integer key : leftFreq.keySet()) {

          int freq = frequency.getOrDefault(key, 0);
          frequency.put(key, freq - leftFreq.get(key));

        }
      }

      //check how many odd values of frequency present in frequency 
      int count= 0;
      for(Integer values : frequency.values()) {
        if(values%2==1) {
          ++count;
        }
      }

      System.out.println("count here "+count);
      result.add((count>k+1) ? false: true);

    }
    return result;
  }

}
