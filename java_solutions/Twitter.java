import java.util.*;

 class Twitter {

  class Tweet {
    int tweetId, time;
    public Tweet(int tweetId, int time) {
      this.tweetId = tweetId;
      this.time = time;
    }
  }

  HashMap<Integer, HashSet<Integer>> userFollowers;
  HashMap<Integer, List<Tweet>> userTweets;
  List<Integer> newsFeed;
  int time = 0;
  /** Initialize your data structure here. */
  public Twitter() {
    this.userTweets = new HashMap<Integer, List<Tweet>>();
    this.userFollowers = new HashMap<Integer, HashSet<Integer>>();
    this.time = 0;
  }
  
  /** Compose a new tweet. */
  public void postTweet(int userId, int tweetId) {
    Tweet newTweet = new Tweet(tweetId, this.time++);
    List<Tweet> tweets = this.userTweets.getOrDefault(userId, new ArrayList<Tweet>());
    tweets.add(newTweet);
    this.userTweets.put(userId, tweets);
  }
  
  /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
  public List<Integer> getNewsFeed(int userId) {
    List<Integer> result = new ArrayList<Integer>();

    PriorityQueue<Tweet> pq = new PriorityQueue<>((a, b) -> a.time-b.time);

    //add own tweets
    for(Tweet t : userTweets.getOrDefault(userId, new ArrayList<Tweet>())) {
      this._addTweetToFeed(pq, t);
    }

    //add followers tweets
    for(int followeeId : userFollowers.getOrDefault(userId, new HashSet<>())) {
      for(Tweet t : userTweets.getOrDefault(followeeId, new ArrayList<Tweet>())) {
        this._addTweetToFeed(pq, t);
      }
    }

    //store result from pq
    while(!pq.isEmpty()) {
        Tweet t = pq.poll();
        // System.out.println("tweet "+t.tweetId+" "+t.time);
      result.add(t.tweetId);
    }

    Collections.reverse(result);
    return result;
  }

  private void _addTweetToFeed(PriorityQueue<Tweet> pq, Tweet t) {
    if(pq.size()<10) {
      pq.add(t);
    } else if(pq.peek().time<t.time) {
      pq.poll();
      pq.add(t);
    }
  }
  
  /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
  public void follow(int followerId, int followeeId) {
      HashSet<Integer> followers = this.userFollowers.getOrDefault(followerId, new HashSet<Integer>());
      if(!followers.contains(followeeId)) {
        followers.add(followeeId);
        this.userFollowers.put(followerId, followers);
      }
  }
  
  /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
  public void unfollow(int followerId, int followeeId) {
    HashSet<Integer> followers = this.userFollowers.getOrDefault(followerId, new HashSet<Integer>());
    if(followers.contains(followeeId)) {
      followers.remove(Integer.valueOf(followeeId));
      this.userFollowers.put(followerId, followers);
    }
  }
}

/**
* Your Twitter object will be instantiated and called as such:
* Twitter obj = new Twitter();
* obj.postTweet(userId,tweetId);
* List<Integer> param_2 = obj.getNewsFeed(userId);
* obj.follow(followerId,followeeId);
* obj.unfollow(followerId,followeeId);
*/