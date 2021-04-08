write through cache
write back cache
write around cache

Features:
1. size
2. eviction strategy
3. Replication
4. distributed data store
5. cache write strategy


Estimation :
1. size  -> 30TB
2. Number of queries per second  -> 10M QPS
3. Number of machines required -> 
      72GB machine 4core processor

      30 * 1000/72  = 417 machines

      replication for each = 417 * 2 = 834 machines

      lets say 10M Queries per second overall.
      query per second for each machine = 10m/417 = ~23000 QPS


      Total CPU time per second : 4 core * 1000 ms * 1000 micro
      CPU processing time per query :  4 * 1000 * 1000 / 23000  = 174 micro seconds

Design Goals:
1. Latency
2. Availability
3. Consistency  Availability over Consistency


Deep Dive:
LRU cache  -> to evict the data easily
single thread machine

multiple threads -> lock on rows (ll of hashmap)






