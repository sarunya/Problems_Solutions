import java.util.PriorityQueue;

import java.util.*;

//TODO:
public class LRUCache {

  class KeyUsage {
    Integer key;
    int time;
    KeyUsage(Integer key, int time) {
      this.key = key;
      this.time = time;
    }
  }

  PriorityQueue<KeyUsage> queue = null;
  Map<Integer, Integer> cache = null;
  int capacity, time;
  public LRUCache(int capacity) {
      this.capacity = capacity;
      this.cache = new HashMap<Integer, Integer>();
      this.queue = new PriorityQueue<KeyUsage>((a,b) -> a.time-b.time);
      this.time = 0;
  }
  
  public int get(int key) {
      if(cache.containsKey(key)) {
        return cache.get(key);
      }
      return -1;
  }
  
  public void put(int key, int value) {
      ++this.time;
      //check if key already in cache
      //check if queue size has reached capacity, if yes
      //then evict one
      if(!cache.containsKey(key) && queue.size()==capacity) {
        KeyUsage keyUsage = this.queue.poll();
        //remove this from 
        cache.remove(keyUsage.key);
      }
      cache.put(key, value);
      return;
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* LRUCache obj = new LRUCache(capacity);
* int param_1 = obj.get(key);
* obj.put(key,value);
*/