import java.util.*;

public class TopKFrequent {

  class Frequency {
    int val, count;
    public Frequency(int val) {
      this.val = val;
      this.count = 1;
    }
  }

    public int[] topKFrequent(int[] nums, int k) {
              List<Integer> result = new ArrayList<Integer>();

      HashMap<Integer, Frequency> map = new HashMap<Integer, Frequency>();
      PriorityQueue<Frequency> pq = new PriorityQueue<Frequency>((a, b) -> {
        return b.count-a.count;
      });

      for(int num : nums) {
        Frequency freq;
        if(map.containsKey(num)) {
          freq = map.get(num);
        } else {
          freq = new Frequency(num);
          map.put(num, freq);
        }
        ++freq.count;
      }

      for(Frequency freq : map.values()) {
        pq.add(freq);
      }

      for(int i=0; i<k; i++) {
        result.add(pq.poll().val);
      }


      return result.stream().mapToInt(i -> i).toArray();
    }
}